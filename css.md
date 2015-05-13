CSS
===

We use CSS to make our websites look nicer. All our design choices should be controlled using CSS rules rather than with HTML. 

Imagine that there is an invisible box around each HTML element. CSS creates rultes that control the way each individual box, and the contents of that box is displayed. For example, we can change the background colour, font, font size and weight, positioning and borders. 

CSS works by associating rules with HTML elements. A CSS rule contains two parts: a **selector** and a **declaration**.

```
p {
	font-family: Arial;
}
```

Here ```p``` is the **selector**. This rule indicates that all HTML ```<p>``` elements should be in the Arial font. Selectors indicate which element the rule applies to. The same rule can apply to more than one element if you separate the element names with commas like so: 

```
p, h1 {
	font-family: Arial;
}
```

CSS **declarations** tell us how the elements that we referred to in the selector should be styled. Our  declarations are placed inside curly brackets and are made up of two parts: a **property** and a **value**, separated by a colon. You can specify more than one property in each declaration, separating each property with a semi-colon:

```
h1 {
	font-family: Helvetica;
	font-size: 12px;
	color: blue;
}
```

**Properties** indicate the aspects of the element you want to change. For example, the colour, the font-size, width, height, border etc. **Values** specify the settings that we want to the chosen properties - in the example above we have set the value of the colour property to blue.

#####Identifying HTML elements
We don't have to use the HTML elements as our selectors. Instead we can give our HTML elements an *id* or *class* property.

An **id** is unique and can be assigned to only one HTML element, whereas many HTML elements can all have the same **class** property. 

For example, say we are writing a newspaper article with 3 different paragraphs in the main body of my article. I could give them each a unique id number but make sure that they are all in the 'main-body' class.

```
<p id='paragraph1' class='main-body'>This is my first paragraph</p>
<p id='paragraph2' class='main-body'> This is my second paragraph</p>
<p id='paragraph3' class='main-body'> This is my second paragraph</p>
```
Why is this useful? 

This makes it easier for us to write our CSS rules. We can use the **id** and **class** attribute as our CSS selector. 

To select an element with a specific id, write a hash character, followed by the id of the element. To select all elements with a specific class, write a full-stop character, followed by the class of the elements. 

The following code would style the HTML paragraphs so that they are all centred and font-size 12, but they are different colours. 

```
.main-body {
	text-align:center;
	font-size:12px;
}

#paragraph1 {
	color:blue;
}

#paragraph2 {
	color:red;
}

#paragraph3 {
	color:yellow;
}
```


#####How cascading works
CSS stands for **cascading style sheets**. So what does 'cascading' mean? 

If there are two or more rules that apply to the same element, it is important to understand which rule will take priority. There are three rules:

1. The last rule: if the two selectors are identical, the latter of the two will take priority.
2. Specifity: if one selector is more specific than the others, the more specific rule will take priority. 
3. Important: you can add ```!important``` after any property value to indicate that it should be more important than other rules that apply to the same element. 

#####Linking our CSS stylesheets to our HTML documents
Our browser needs to be able to find the correct CSS file used to style the page. We can do this by adding a ```<link>``` element in our HTML document. It is an empty element, meaning it does not need a closing tag, and lives inside the ```<head>``` element. This code is not necessary to memorise, but can just be copy and pasted each time you need to use it.

```
<link href='homepage.css' type='text/css' rel='stylesheet'>
```

You need to update the text in the *href* section with the name of your own css file. 