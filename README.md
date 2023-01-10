# 🐱‍👤 SpellSpike
(𝒔𝒑𝒆𝒍𝒍𝒔𝒑𝒊𝒌𝒆 𝒊𝒔 𝒏𝒐𝒕 𝒐𝒑𝒆𝒏-𝒔𝒐𝒖𝒓𝒄𝒆)
The new, more powerful and easier programming language.

HOW TO USE ON WINDOWS:
Download the Repository (Clicking on "Code" and then "Download Zip"), then in the "Windows" folder, run the file "SpellSpike_Dashboard.exe", and complete the steps (Usually Clicking Next). When you complete all steps, start programming! Remember to edit only the "Index.html" file.

(You will need to download the dependencies, for this read: https://raw.githubusercontent.com/NervousGroove/SpellSpike/main/Windows/Dependencies/help.txt)

(Available for Windows only, Linux and MacOs versions are under construction)

SpellSpike is a programming language developed and distributed by SwankyNoob.
Besides being extremely popular for its ease of programming and interpretation, SpellSpike is one of the most powerful languages on the technology and development market. The SpellSpike language is very broad and can be used for everything, and it is built around efficient and easy-to-use languages such as Python and JavaScript. You can create anything with SplSpk even if you are a beginner or advanced in programming regardless of your level of knowledge, you can do basic and simple things like Websites, to extremely advanced and complex things like Games, Engines, IDEs, Operating Systems, and DAWs, APIs, CADs, Browsers and much more!

![error](https://raw.githubusercontent.com/NervousGroove/SpellSpike/main/SpellSpike.png)

# 🐱‍🚀 Expressions and Functions:
Whenever you want to add a function, for example, you want to add a new paragraph using "print()", you must call this function via an event (we recommend OnLoad, in the Body section, because it is more efficient). You should not add for example the print() command. Let's take an example:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SpellSpike Program</title>
</head>
<body onload="print()"> <!-- In the "On Load" Event, insert the functions you will use, to learn more, read the documentation on Github or on the official website. -->
	
<!-- Your Code: -->
	<script type="text/javascript">
p = "Hello Word"
	</script>

<!-- Scripts: -->

<script src="src/Alert.js"></script>
<script src="src/Function.js"></script>
<script src="src/Var.js"></script>
<script src="src/Engine.js"></script>
<script src="src/Prompt.js"></script>
<script src="src/Write.js"></script>
<script src="src/Events.js"></script>
</body>
</html>
```

Notice that in the "OnLoad" field of the Body we indicate which function we are going to use (you can indicate as many as you want), and in the <script> we add what is the content of this paragraph. After a function/expression is used once, if you want to add another one, you must add a number, for example print2(). Some elements have limits, for example:
No more than 10 Alerts and 10 Prompts can be added. Also the "print()" command has a limit to be used 35 times. But over time we will increase this limit, although nobody ever uses usually more than 2 alerts or 2 prompts. Example:
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SpellSpike Program</title>
</head>
<body onload="print(), print2()"> <!-- In the "On Load" Event, insert the functions you will use, to learn more, read the documentation on Github or on the official website. -->
	
<!-- Your Code: -->
	<script type="text/javascript">
p = "Hello Word"
p2 = "Welcome :)"
	</script>

<!-- Scripts: -->

<script src="src/Alert.js"></script>
<script src="src/Function.js"></script>
<script src="src/Var.js"></script>
<script src="src/Engine.js"></script>
<script src="src/Prompt.js"></script>
<script src="src/Write.js"></script>
<script src="src/Events.js"></script>
</body>
</html>
```
Now let's look at all the functions and expressions:
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SpellSpike Program</title>
</head>
<body onload="print(), msg(), Prompt(), OnClick(), BluetoothRequestAll()">
<!-- MSG: Is used to show alerts -->
<!-- PRINT: It is used to write paragraphs -->
<!-- PROMPT: Is used to ask the user questions -->
<!-- ONCLICK: It serves to create the event when an object is clicked, in the Onload section of the Body, it serves to indicate that this event will be used, but it does not mean that the target of the click is the Body, since the target will be indicated with the expression "Element", -->
<!-- BluetoothRequestAll: The BluetoothRequestAll function, as its name suggests, requests all Bluetooth devices (without filters). Unlike the other functions, it doesn't need to be configured, after being added to an event (such as the Onload body), it will already be in effect. -->

	
<!-- Your Code: -->
	<script type="text/javascript">
p = "Hello Word" //Used to indicate the contents of its respective "print()", in this case, the first print().
PromptInfo = "Info" //It is used to enter information about Prompt(), in this case the first Prompt(). You can ask questions here.
PromptInput= "Input" //Here you can enter initial text at the prompt. (In this case, at the first prompt())
Element = "El" //The Element expression defines the target of the OnClick event, which is indicated in the OnLoad section of the Body.
vrb = "hello" /*This is not a recommended way to create variables, but it is still functional. We don't recommend it because there are no keywords, like "Var Welcome = 1", the VRB method uses numbers, for example:
vrb = "Hello";
vrb2= "Welcome";
vrb3= "Hi"; */
action = function(){ //This is an example of a function, in the language the expression action is used to indicate functions. This is just an example, which displays a message on the console. Like some other elements, after the first function, you must add a number (up to 30).
	console.log('Hello word!')
}	
renderer = WebGL; //This expression is in Beta, but its purpose is to select the renderer.


	</script>


<!-- Scripts: -->

<script src="src/Alert.js"></script>
<script src="src/Function.js"></script>
<script src="src/Var.js"></script>
<script src="src/Engine.js"></script>
<script src="src/Prompt.js"></script>
<script src="src/Write.js"></script>
<script src="src/Events.js"></script>
</body>
</html>
```
# Mathematics:

Addition:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SpellSpike Program</title>

</head>
<body onload="mathsum()"> <!-- In the "On Load" Event, insert the functions you will use, to learn more, read the documentation on Github or on the official website. -->
	
<!-- Your Code: -->
	<script type="text/javascript">
a = 15; //The first number (a) of the divided, which will be added together with b
b = 76; //The second number (b) of the divided, which will be added together with a
	</script>

<!-- Scripts: -->

<script src="src/Alert.js"></script>
<script src="src/Function.js"></script>
<script src="src/Var.js"></script>
<script src="src/Engine.js"></script>
<script src="src/Prompt.js"></script>
<script src="src/Write.js"></script>
<script src="src/Events.js"></script>
<script src="src/Bluetooth.js"></script>
<script src="src/Renderer.js"></script>
<script src="src/Audio.js"></script>
<script src="src/Math.js"></script>
<script src="src/FileSystem.js"></script>
</body>
</html>

```

Division:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SpellSpike Program</title>

</head>
<body onload="mathsplit()"> <!-- In the "On Load" Event, insert the functions you will use, to learn more, read the documentation on Github or on the official website. -->
	
<!-- Your Code: -->
	<script type="text/javascript">
a = 15; //The first number (a) of the addition, which will be added together with b
b = 76; //The second number (b) of the addition, which will be added together with a
	</script>

<!-- Scripts: -->

<script src="src/Alert.js"></script>
<script src="src/Function.js"></script>
<script src="src/Var.js"></script>
<script src="src/Engine.js"></script>
<script src="src/Prompt.js"></script>
<script src="src/Write.js"></script>
<script src="src/Events.js"></script>
<script src="src/Bluetooth.js"></script>
<script src="src/Renderer.js"></script>
<script src="src/Audio.js"></script>
<script src="src/Math.js"></script>
<script src="src/FileSystem.js"></script>
</body>
</html>

```

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SpellSpike Program</title>

</head>
<body onload="mathsum()"> <!-- In the "On Load" Event, insert the functions you will use, to learn more, read the documentation on Github or on the official website. -->
	
<!-- Your Code: -->
	<script type="text/javascript">
a = 15; //The first number (a) of the divided, which will be added together with b
b = 76; //The second number (b) of the divided, which will be added together with a
	</script>

<!-- Scripts: -->

<script src="src/Alert.js"></script>
<script src="src/Function.js"></script>
<script src="src/Var.js"></script>
<script src="src/Engine.js"></script>
<script src="src/Prompt.js"></script>
<script src="src/Write.js"></script>
<script src="src/Events.js"></script>
<script src="src/Bluetooth.js"></script>
<script src="src/Renderer.js"></script>
<script src="src/Audio.js"></script>
<script src="src/Math.js"></script>
<script src="src/FileSystem.js"></script>
</body>
</html>

```

Multiplication:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>SpellSpike Program</title>

</head>
<body onload="mathmultiply()"> <!-- In the "On Load" Event, insert the functions you will use, to learn more, read the documentation on Github or on the official website. -->
	
<!-- Your Code: -->
	<script type="text/javascript">
a = 15; //The first number (a) of the multiplied, which will be added together with b
b = 76; //The second number (b) of the multiplied, which will be added together with a
	</script>

<!-- Scripts: -->

<script src="src/Alert.js"></script>
<script src="src/Function.js"></script>
<script src="src/Var.js"></script>
<script src="src/Engine.js"></script>
<script src="src/Prompt.js"></script>
<script src="src/Write.js"></script>
<script src="src/Events.js"></script>
<script src="src/Bluetooth.js"></script>
<script src="src/Renderer.js"></script>
<script src="src/Audio.js"></script>
<script src="src/Math.js"></script>
<script src="src/FileSystem.js"></script>
</body>
</html>

```
