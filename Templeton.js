function Templeton(template) {

	var sections = template.split("%js{");
	var subSections = [];
	var sourceCode = "";
	var section = "";
	
	for ( var i = 0; i < sections.length; i += 1 ) {	
	
	    section = sections[i];
		
	    if ( section.indexOf("}js%") == -1 ) {
	    
			sourceCode += "\necho(atob(\"" + btoa(section) + "\"));";
		
		} else { 
		
		    subSections = section.split("}js%");
			sourceCode += "\n" + subSections[0].trim();
			sourceCode += "\necho(atob(\"" + btoa(subSections[1]) + "\"));";
		}
	}
	
	return eval(`(function(){ 
	
	    var __result = "";
		var echo = function ( value ) { __result += value; };
	
	    (function(){ 
			${sourceCode}
		}());
	
	    return __result;
	
	}());`);
};