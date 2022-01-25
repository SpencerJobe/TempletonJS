# TempletonJS
Simple client-side JavaScript Template Engine defined in a single function.  
&nbsp;  
Templeton.js provides a single function called Templeton. Pass in a string representing the template you want resolved. Templeton will run the javascript inside the template-script tags "%js{" and "}js%" and return the processed string result. 
&nbsp;  
&nbsp;  
There is one special Templeton command you can use from within the template-script tags: `echo`. This function will return a string result of whatever you pass into it. See example usage below. Pay attention to how the for loop is ended. 



# Example Usage

```javascript

var myObject = { title: "Example Page" };

document.open();
document.write(Templeton(`<html>
	<head>
		<title> %js{ echo(myObject.title); }js% </title>	
	</head>
	<body>
		%js{ for ( var x = 0; x < 100; x += 1) {  }js%
    
			<div id="cell_%js{ echo(x); }js%">
				X = %js{ echo(x); }js%
			</div>
		%js{ 
		    } //end for loop
		}js%
		
		
	</body>
</html>`));
document.close();

```
