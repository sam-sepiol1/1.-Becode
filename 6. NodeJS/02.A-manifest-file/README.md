# Package.json

Typically when creating a NodeJs project, you will need a file called `package.json`.

## What is it?
A `package.json` file is a **manifest** file.

A manifest file in Javascript is a `JSON` document that contains startup parameters and application defaults for when a web application is launched.

## Initialize a manifest
Lucky for us, we don't need to create this `package.json` file from memory.

By using our `package manager` **NPM**, we can execute a command that will generate a `package.json` for us.

1. Open your terminal/CLI and navigate to your project folder
2. Type in the following command:

```
npm init
```

This will execute a command and start asking you some questions to initialize your package.json file.

You can update the default setup by entering new info to those questions

OR

You can just set the defaults up and start from there. In that case you can also run the faster command instead of `npm init`:

```
npm init -y
```

## What does it do?
Let's have a look, shall we?

Let's dissect the generated `package.json`

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Big Bee",
  "license": "ISC"
}
```
- **name:** your project's name
- **version:** the current version of your project
- **description:** describe your project
- **scripts:** commands that can be executed with npm
    * if you run `npm run test` it will run the test script in your terminal/CLI
    * you can add your own scripts to it as well
- **keywords:** relevant mostly when creating your own package/library
    * you can enter keywords that you expect people to use when searching for this package to improve search results
- **author:** mention yourself, or your team as author(s)
- **license:** the ISC, a permissive license, allows for just about any application of the code. `Users are free to: Use the code commercially`

## But then... there is also... Installing packages!

> **Scenario:** 
>
>You make a project and need to implement a complex or time consuming code in it. Instead of having to write it from start to finish, we often have libraries or packages, made by other developers, that are available for us to use. Thus allowing us to import other developer's code into our projects.

One of the most important parts in a `package.json`, next to running scripts, is it's capability to keep track of those packages/libraries.

### Dependencies
*Ways to install a package:*
```
OPTION 1: npm install package-name
OPTION 2: npm i package-name

// if you installed yarn

OPTION 3: yarn add package-name
```

When installing a new packages, **two** things happen
1. it will add the package as a dependency to our package.json
    - together with a version: `"package-name": "1.0.5"`
2. a `node_modules` folder will be added to your project and your package will be added in that folder
    - as a rule-of-thumb we do visit this folder, as it is a nightmare to find anything inside.
3. (woops I lied) there will also be a "lock" file created that contains all the dependencies any package you installed needs (consider it a deep dive version of the dependencies list in your package.json).
    - This file is useful for version control, to manage the versions of your packages if needed.

### Dev Dependencies
*Ways to install a package as a dev dependency:*
```
OPTION 1: npm install package-name --save-dev (or simply: -D)
OPTION 2: npm i package-name --save-dev (or simply: -D)

// if you installed yarn

OPTION 3: yarn add package-name --dev (or simply: -D)
```

It is pretty much the same as normal dependencies in terms of use. But the difference is that those packages should be installed as a dev dependency and used only for development, not for production.

## Time for practice!

Time to go to the [next exercise](../README.md#exercises)!