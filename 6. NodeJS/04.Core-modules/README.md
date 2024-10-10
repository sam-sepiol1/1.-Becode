# Core modules

Node.js has a set of **core modules**, also called **Build-in modules**.

These modules can be used without any further installation.

Here is [a list](https://www.w3schools.com/nodejs/ref_modules.asp) of all the core modules you can use.

But before we get into Core modules, we first need to know about `__dirname` and `__filename`!

## __dirname & __filename

Both are what we call **"environment variables"**

What they do...:
* `__dirname`: the absolute path to the current directory
* `__filename`: the absolute path to the current file (`__dirname` + file)

you can test them out by **console log** them in your server.js and run your script.

> This is very interesting when you need to work with your folder structure or change content in a file for example.

## Some Core modules to know:

* [Path](./01-path.md)
* [FileSystem (fs)](./02-filesystem.md)

## An exercise:

### 🌱 Must have
Using the `path` and the `fs` modules, we are going to create a simple web structure.

Create the following structure inside a new folder called `client`:

```
├──index.html
├──style.css
│
├──contact
│  ├──index.html
│  └──style.css
│
├──about
│  ├──index.html
│  └──style.css
│
├──blog
│  ├──index.html
│  └──style.css
```

#### Requirements
- each **index.html** file should contain a **`<h1>`** with a title (referring to the page)
- each **index.html** should have a **`<link>`** to their individual css file
- each **style.css** should have a different **`background-color`** for the body element

### 🌼Nice to have
Just as we have the `path` and `fs` modules, there is also an `os` (operating system) module.

- add a **info.txt** file to the `client` folder
- depending on which OS you are using, add `This is being run on a <name of your os> computer!` as text in that folder

## Well done! 
Time to go to the [next exercise](../README.md#exercises)!