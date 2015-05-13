####HTML

Many web pages are like electronic versions of documents that we come accross in our lives, such as newspapers, shop catalogues, letters etc. As we know from offline documents, structuring our documents well is extremely important in helping readers to understand the message we are trying to convey. For example we would structure a news article differently from a shopping catalogue. Similarly, different websites have different structures, and we need to build a structure that is appropriate for our specific website. We use a language called **Hyper-Text Markup Language**, more commonly known as **HTML** to describe the structure of a web page. 

Below is a sample HTML structure for a very simple website. 
```
<html>
	<body>
		<h1>This is the Main Heading</h1>
		<p>This text might be an introduction to the rest of the page. And if the page is a long on it might be split up into several sub-headings</p>
		<h2>This is a sub-heading</h2>
		<p>Many long articles have sub-headings to help you follow the structure of what is being written. There may even be sub-sub-headings (or lower-level headings)</p>
		<h2>Another sub-heading</h2>
		<p>Here you can see another sub-heading.</p>
	</body>
</html>
```

The HTML code in the ```<>``` brackets are called **HTML elements**. Elements are usually made up of an opening and closing tag. The closing tag is identified by a forward slash in it. Each element tells the browser something about the information that we put in between the opening and closing tags. 

######Body, head and title
* ```<body>``` - everything inside this element is shown inside the main browser window. Anything you want to be visible to the user should be within the <body> tags. You might be wondering what would go outside of the <body> tags. This is what the ```<head>``` element is for... 

*```<head>``` - before the <body> element you will often see a <head> element. This contains information *about* the page, such as language and location of the website, tags which make our website searchable on a seach engine, or a title for the website. 

*```<title>``` - the contents of <title> aren't shown as a title on your website, rather they are shown in the top of the browser. In Google Chrome, if you look at the tab for the window, it won't display a full URL (like www.google.com), but rather it will display 'Google'. It gets this information from the <title> tag on the Google codebase. 

* There are many other HTML elements that will be important for us to be able to structure and write good HTML code. HTML provides us with six different heading sizes, from <h1> to <h6>. We would put an <h1> heading on our most important heading, i.e. the title of our website, and an <h6> tag on the least important. 

*If we want to create a paragraph, we put the content of the paragraph in between <p> tags. 

* HTML gives us the ability to make both ordered (i.e. numbered) and unordered lists. At the beginning and end of the list we place <ol> or <ul> elements for *o*rdered *l*ist or *u*nordered *l*ist. We then place each *li*st item between <li> tags e.g. 

```
<ol>
	<h3>Fruit basket</h3>
	<li>Apples</li>
	<li>Oranges</li>
	<li>Grapes</li>
</ol>
```

* We can also include images on our websites using HTML <img> tag. The <img> tag is empty, it contains attributes only, and does not have a closing tag. To add an image we might write something like this:
```<img src='smile.jpg' alt="Smiley face" style="width:128px;height:128px">```

The ```src``` refers to the name of the file where the picture we want to upload is saved. The ```alt``` attribute specifies an alternate text for the image, if it cannot be displayed. You should describe what the image is. It is important to add a brief description of the image for screen readers. Screen readers are software programmes that can read what is displayed on a screen are are used by people who are visually impaired or learning disabled. They can "reproduce" HTML as text-to-speech, sound icons, or braille output and make the website accesible to all. After the ```alt``` we can specify a width and height for our image. 

* You don't have to memorise the HTML elements because they are well documented online and you can always refer to the reference website, but a couple of elements you will become familiar with as you use them. This is the official website http://www.w3schools.com/html/ and has all the information you will need. Highly recommend spending a good amount of time working through the examples if you wish to become very familiar with HTML.  

Summary
========

*HTML pages are text documents
*HTML uses tags, which as characters that sit inside angled brackets. They act like containers and tell you something about the information that lies between them.
* Tags are often referred to as elements.
* Tags usually come in pairs. The opening tags denotes the start of a piece of content; the closing tag denotes the end.
* Opening tags can carry attributes, which tell us more about hte content of that element.
* Attributes require a name and a value.
* To learn HTML you need to know hwat tags are available for your to use, what they do, and where they can go. 
