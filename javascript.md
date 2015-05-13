Javascript and jQuery
=====================

JavaScript is the most popular programming language in the world and helps us to control the behaviour of our websites. Whilst HTML helps us structure our webpages, and CSS will help us style them, without any JavaScript, our websites will not respond to the user's behaviour in a way that we see modern websites doing. JavaScript can be used for both front-end and back-end work. 


In this introduction, we just want to focus on how JavaScript can help us with the front-end. We want to use JavaScript for **event handling**. Events usually relate to some kind of user interaction - clicking a button, filling in a form, scrolling the page are all examples of events. A JavaScript library called **jQuery** has been written with the specific purpose of event handling - helping us to write less JavaScript code. You might have noticed in our HTML code that in the ```<head>``` tags there was this line: ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>```. This tells our browser to access the jQuery library so that we can use it. Whenever you want to use jQuery in your website, you have to make sure to include this line in your HTML. 

####jQuery Syntax
The jQuery syntax is tailor made for selecting HTML elements and performing some action on the element(s).

Basic syntax is: $(selector).action()

A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:
```
$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".
```

There are many events that we may want to respond to. Here a couple of useful jQuery events that we might want to use in our website.

* .mouseenter() - triggers specified action when the mouse enters the selected element
* .mouseleave() - triggers specified action when the mouse leaves the selected element
* .click() - triggers specified action when the selected element is clicked
* .css('background-color', 'red') - changes the background colour of the selected element to red 
* .html('Hello I am now the HTML code')


