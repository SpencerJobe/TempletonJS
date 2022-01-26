function Templeton(template) {

    var sections = template.split("%js{");
    var transpiled = "";
    var subitems = [];
    var section = "";
    
    for ( var i = 0; i < sections.length; i += 1 ) {    
    
        section = sections[i];
        
        if ( section.indexOf("}js%") == -1 ) {
        
            transpiled += `\necho(atob("${btoa(section)}"));`;
        
        } else {

            subitems = section.split("}js%");
            code = subitems[0].trim();
            text = subitems[1];
            
            transpiled += code[0] == "=" ?
                `\necho(${code.substring(1)});` : `\n${code}`;
            
            transpiled += `\necho(atob("${btoa(text)}"));`;
        }
    }
    
    return eval(`(function(){ 
    
        var __result = "";
        var echo = function ( value ) { 
            __result += value; 
        };
    
        (function(){ 
            ${transpiled}
        }());
    
        return __result;
    
    }());`);
};
