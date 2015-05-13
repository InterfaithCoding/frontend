README
======

This week we are going to be learning some **front end** technologies. Front end development is the development of those elements of a website that the customer sees and interacts with directly. Designing websites has become far more advanced and complicated over the past five years because of the explosion of variety of devices with varying screen sizes and operating systems. 

There are three important languages to help us to **structure**, **style** and control the **behaviour** or our website. 

####HyperText Markup language (HTML)
HyperText Markup language is the backbone of any website development process, it is the HTML code that provides an structure of how the website will look. The latest version of HTML is called HTML5 which has new and efficient way of handling elements such as video and audio files.

####Cascading Style Sheets (CSS)
Cascading Style Sheets (CSS) controls the presentation aspect of the site and allows your site to have its own unique look. It does this by maintaining style sheets which sit on top of other style rules and are triggered based on other inputs, such as device screen size and resolution.

####JavaScript
JavaScript is an event-based imperative programming language (as opposed to HTML's declarative language model) that is used to transform a static HTML page into a dynamic interface. JavaScript code can use the Document Object Model (DOM), provided by the HTML standard, to manipulate a web page in response to events, like user input.

####Today's challenge
We are going to build the front-end of our 'Rock, Paper, Scissors, Lizard, Spock' website. The walkthrough is going to be quite basic, introducing you to the key concepts, but it is up to you to customise and design the website however you want. Have fun with it and use the online resources to help you do something you might not know how to.

The first step is to build the **HTML structure** of the website. Now would be a good time to take a look at the [introduction on HTML](https://github.com/InterfaithCoding/frontend/blob/master/html.md) that I have prepared for you. 

After you have done that create a new file and call it 'rps.html'. You might want to create a new folder to keep all the files you have in one place. You can also decide on a theme for your game, and find five images on Google that you want to use in your game. You should save these in the new folder you created. 

In the file 'rps.html' type the following code. 

#####Basic HTML code

```
<html>
	<head>
		<link href='rps.css' type='text/css' rel='stylesheet'>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="rps.js"></script>
	</head>
```
This code is not shown on the browser, but it contains information about the page that is important for the browser to know. It tells the browser where our css stylesheets and javascript code are placed. You can copy and paste 
```
	<title>Rock Paper Scissors Lizard Spock</title>
```

This is the title for our website that will be shown on the browser tab. 

```
	<body>
		<h1 id='title'>Rock Paper Scissors Lizard Spock</h1>
		<h2 class='call-to-action'>Are you ready to play?</h2>
		<p> Please enter your name: </p>
		<form>
			<input type="text" name="name">
			<input type="submit" value='Submit'>
		</form>
		<p class='instructions'>Click on your pick below, and await your fate...</p>
		<ul id='game-images'>
			<li id='rock'><img src='rock.jpg' alt="Rock" ></li>
			<li id='paper'><img src='paper.jpg' alt="Paper" ></li>
			<li id='scissors'><img src='scissors.jpg' alt="Scissors" ></li>
			<li id='lizard'><img src='lizard.jpg' alt="Lizard" ></li>
			<li id='spock'><img src='spock.jpg' alt="Spock"></li>
		</ul>
	</body>
</html>
```

This is the main body of our code, the bit which will be shown to the user. We first have an h1 heading and then a sub-heading. After that I have put in a form so that our player can enter their name. Feel free to customise the text of the headings, add in your own and change the form. 


With the ```<ul>``` element I have created a new unordered list to contain the images that I am going to use.

To see what our website currently looks like open 'Google Chrome'. Click the 'File' tab and select 'Open file'. Open 'rps.html'.

This is a very simple HTML structure, but that is all we need for the time being to get us started. Don't forget to use [w3 Schools website](http://www.w3schools.com/html/) to find out how to add other elements such as links. 

#####Let's add some style to this
Before we start styling our website, read the [introduction to css](https://github.com/InterfaithCoding/frontend/blob/master/css.md)


Create a new file called 'rps.css'
At the moment, our website is looking very dull. Maybe we want to add a background. I recommend finding a suitable background from [this website](http://subtlepatterns.com/). Choose one you like and download it. Open up the downloaded folder, and copy the file with the '.png' extension in to the folder you created for your 'Rock Paper Scissors' project. 

Your CSS code might look something like this: 

```
body, html {
	background-image:url(confectionary.png);
	font-family:Helvetica;
	margin:20px;
}

img {
	width:150px;
	height:150px;
	border:5px dashed #0c595b;
	border-radius:75px;
}

#title {
	text-align:center;
	margin-top:40px;
	color:#0c595b;
	border:5px solid #43474c;
	border-radius:10px;
	padding:10px;
	background-color:white;
}

.call-to-action {
	color:#43474c;
}

.instructions {
	color:#0c595b;
	font-size:24px;
	text-align:center;
	padding:40px;
}

#game-images {
	list-style:none;
	width:100%;
	display:table;
}

#game-images li {
	display:table-cell;
	width:auto;
}

```

There will be some properties that you have not yet met. Google what they do. Explain to your partner what ```border-radius``` is. Look for more properties that you can change on the [w3schools website](http://www.w3schools.com/css/) to make this website uniquely your own. 

For colours, instead of just typing what colour we want, we can control exact shades, but declaring a hexcode as the value. [Here's](http://www.color-hex.com/) a good website to browse through a great variety of colours and find their hexcodes. 

If you open up the file in the browser like we did earlier, you website should be looking very different! At this point, mine looks like this:
![alt text](https://github.com/InterfaithCoding/frontend/blob/master/rps_frontend/stylisedgame.png)

It's quite basic, and there's a whole lot more you can do with the styling and theming. Only move on to the next section when you are happy with how it looks like. 