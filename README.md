# TempletonJS
Simple client-side JavaScript Template Engine defined in a single function.  
&nbsp;  
Templeton.js provides a single function called Templeton. Pass in a string representing the template you want resolved. Templeton will run the javascript inside the template-script tags "%js{" and "}js%" and return the processed string result. 
&nbsp;  
&nbsp;  
There is one special Templeton command you can use from within the template-script tags: `echo`. This function will return a string result of whatever you pass into it. See example usage below. Pay attention to how the for loop is ended.   
&nbsp;  
&nbsp;  
You can use the following shorthand syntax to echo variables. 
`%js{=myObject.title}js%`



# Example Usage

```javascript

var myObject = { "title": "Hello world" };

document.open();
document.write(Templeton(`
<html>
    <head>
        <title> %js{=myObject.title}js% </title>
    </head>
    <body>
        %js{   for ( var i = 0; i < 100; i += 1) {   }js%

            <div id="div_%js{=i}js%">
            I = %js{=i}js%
            </div>
        
        %js{ } }js%

    </body>
</html>
`));
document.close();


```
