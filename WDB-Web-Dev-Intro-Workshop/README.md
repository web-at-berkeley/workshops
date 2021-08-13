# Web development Workshop

Welcome! The workshop is divded into three parts: 
1. The basic of web development: HTML
2. Make your website beautiful and functional: CSS & JS
3. Leverage the power of open source library: [Bootstrap](https://getbootstrap.com/)

We will be writing and altering code for each part of the workshop! Therefore, I have included three folders containing the codes that we will cover for each part.

At the end of this workshop, you will be able to build this (screenshots below), and understand the how and the why behind web development.

![home page](/WDB-Web-Dev-Intro-Workshop/home-page.png)
![about page](/about-page.png)

## Setup
If you haven't download `git`, download it here! Git is a powerful tool to control and manage your code.

Download Git: https://git-scm.com/downloads

After downloading git, you can clone the code from this repo by doing this in your terminal:

```bash
git clone https://github.com/web-at-berkeley/WDB-Web-Dev-Intro-Workshop.git
```

This will create a folder called `WDB-Web-Dev-Intro-Workshop` in your current folder. All the code that we need will be cloned by git and added into that folder. 

Now, let us dive right into the world of web development!

## Part One - HTML
HTML is the skeleton of any website. It is a kind of declarative languages that allows a website to display titles, paragraphs, image, and more on a browser. It is very easy to learn and simple to use. Let's see a basic example:

```HTML
<html>
<h1> Hello World! </h1>
<p> This is a paragraph. </p>
</html>
```

In HTML, everything should be put in between a pair of tags. A pair of tags contains an open tag and a closing tag: `<html>` is an open tag, and `</html>` is an closing tag. As you can see, by adding a `/`, the open tag would become a closing tag. 

Every tag has a different meaning and can be used to represent different elements in the website:
* The `<html>` tag means that everything in between the tag is the content of the HTML. 
* `<h1>` tag would make the thing in between the title of the website.
* `<p>` tag is a paragraph. 

There are several other tags that would be extremely useful and common in web development, they are:
* `<a>` tag is a link.
* `<img>` tag allows you to include a image.
* `<h2>`, `<h3>` allows you to adjust the "level", or the importance of the heading. The smaller the number, the more important the heading.
* `<button>` allows you to add a clickable button. 

Feel free to play around with the tags above. You can also explore the rest of the tags here:
[HTML Element Reference](https://www.w3schools.com/TAGS/default.ASP). 

---

Now let us look at a more complicated HTML example: `index.html` file located in the `part-one-html` folder. 

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title> Macintosh </title>
</head>
<body>
    <h1> Macintosh </h1>
    <img src="image/macintosh-white-bg.jpg" alt="A picture of Macintosh" width="700px">
    <a href="about.html"> Learn More </a>
    <a href="#"> Purchase </a>
</body>
</html>
```

This is the first step of building our macintosh website: writing out HTML code. Let us walk through these HTML line by line.

1. `<!DOCTYPE html>` is not a HTML tag! It is an instruction to tell the browser 
2. `<html lang="en">` is the same html tag that we just introduced before, with a little addition of the language attribue that specify that most of the text in this website is going to be english. 
3. `<head>` tag is used to include meta data inside an html page. Things like title, link to the styling of the website, link to the javascript of the website and more can be included in the head tag. Here we have included the title of the website, Macintosh using the `<title>` tag.
4. `<body>`, `<h1>` we have already talked about these two tags before. To reiterate, the `<body>` tag is used to specify the actual content of the website, and the `<h1>` is used to specify the "most important" or level one title.
5. `<img>`: This is an image tag. It allows us to include image in a website. To include the image, you need the `src` attribute to point to the address where you picture is stored. The `alt` attribute will be shown if the picture is having trouble loading on the website. The `width` attribute specify the width of the picture. Here, we let `width="700px"`, which means to let the width of the picture to be 700 pixels. We will learn more about width and `px` in the CSS part of this workshop.
6. `<a>`: This is the link tag. It will create a link that allows the user to click and being redirected to another page. The address of the page that the user would be redirected to is included in the `href` attribue of the tag. `<a href="about.html">` will redirect the user to the about.html page that is in the same folder as the index.html file; while `<a href="#">` will not redirect the user to any other pages. Instead, it will redirect the user back to the page that the user is currently at. Essentially, what it is doing is just "refreshing" the page. 

Now we have covered the essentials of the HTML! Open the `about.html` file in the `part-one-html` folder. Try to understand line by line what does the HTML code in the `about.html` file do!

## Part Two - CSS & JS
### CSS
Now that we have covered the basic of HTML, it is time to give our website some stylings! Introducing CSS, a language that adds styles to your document.

Let's look at a basic example of css:

```CSS
a {
    color: red;
    background-color: black;
    font-size: 30px;
}
```

There are two parts to a full CSS syntax:
1. Selector
2. Declaration

Selector is used to select one particular element in the website. Here, in this example, the selector is the `a`, which means that the styles in the bracket would apply to every `a` element, aka the links, in the website. 

Declaration is what is inside the brackets. There are two parts to a declaration, a property, followed by a value. For instance, if you want to specify the color of the text to red, you use `color` property, and assign `red` to its value, giving us `color: red`. 

In this example, it means that it will select every link in the website and let their text color to be red, background color to be black, and the size of the font to be `30px`.

I know it is intimdating to see so many different properties at once, but as you write more and more CSS, you will become more familar with these properties. For now, you can use our good friend Google to find the property that you need.

Before moving on to work on a real example, I want to talk more about CSS selectors. It turns out that CSS selector is very powerful, it can select more than a specifc type of element on a website:

Every HTML element has a class attribute. For example, you can give a `<p>` element a class called `important` by using:

```
<p>
    Some not important text.
</p>
<p class="important">
    Some important text. 
</p>
```
To select a particular class, simply add a dot (`.`), in front of the name of the class. Here, we want to select the class important, and therefore, we can use the selector `.important`, and then you are able to select all the elements that have the class `important`. 

Now, let us move on to a real life example.

You can find all the css files that you need in the `part-two-css-js` folder. 

Let us now take a look at the `style.css` file:


```CSS
* {
    padding: 0;
    margin: 0;
}

.center-box {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    text-align: center;
}

h1, h2, p, a {
    font-family: 'Helvetica';
    margin-bottom: 15px;
}

h1 {
    font-size: 80px;
}

h2 {
    font-size: 50px;
}

p {
    font-size: 20px;
    line-height: 30px;
}

a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 30px;
    font-size: 20px;
}

a:hover {
    color: green;
}

.cover-image {
    width: 100vw;
}
```

## Resources

Learn more about Bootstrap: [Bootstrap](https://getbootstrap.com/)

Find free high resolution photos: [Unsplash](https://unsplash.com/)

Publish your website using Github Page: [Github Page](https://pages.github.com/)
