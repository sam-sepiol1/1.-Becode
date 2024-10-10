# HTTP servers
Psst, wanna build a server?

## HTTP core module
In order to **create a server**, we first need to know, that Node.js has a **core module** called `http`, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

So first we need to import the core module:
```js
const http = require('http') // plain Javascript

// OR

import http from "http"; // ES6 (modern Javascript) (not recommended when using environment variables)
```

> **NOTE !**
>
> When using the `__dirname` or `__filename` in node, it is better to NOT use ES6 imports. Those environment variables are not completely supported yet. Generally, when just using node (no frameworks), going with plain javascript is more recommended for now (until ES6 is completely included into Node). 

## Creating a server
The `http` core module, will take care of a lot of the setup required to run a server. We will be able to execute that setup by **calling upon it's methods** 

1. Go to the server.js file in your project and remove the code from the previous exercises. (put them into a separate file if you want to keep that code)
2. import the `http` module at the top of your file
3. now the serious stuff! We need to create a server object by using our http module:
```js
// This `server` will receive data.
const server = http.createServer()
```
4. now that we have the server as an object stored in our variable `server`, we can make the server watch for certain events by using the `server.on()` method.
    - this method will expect two arguments: `server.on(argument01, argument02)`
    - **argument01:** is the type of event it needs to listen to, in this case a `request` event -> **when the server get's a request**
    - **argument02:** is a `callback function`, that will execute something when the event is triggered.
    - the `callback function` will on it's turn receive **2 parameters: request & response**
```js
server.on("request", (request, response) => {
    // Do something here
})
```
5. make the server **listen** to a `PORT`
    - the `listen` method also expects **2 arguments**: a `port number` and a `callback (optional)`
    - Traffic can cause problems.. not just on the road, but also in programming.. We use ports to be able to avoid programs conflicting with each other. 
    - **For example** if you were to run 2 apps you made at the same time on your `localhost`, it would cause a problem if they didn't have a unique PORT.
```js
// We use our server object again to add a 'listen' method to it.

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})
```

6. That's it! The world's most simple server! Test it out by running your `npm run dev` and look at the result in your terminal/CLI.

## Requests & Responses
In our **callback function**, we can make use of 2 parameters: `request` and `response`.

### Request (short: req)
The request parameter is going to handle all the data coming from the HTTP request.

You gan get the URL, HEADER, METHOD, queries, and many more.

#### Let's try

```js
// The server object
const server = http.createServer()

// The event watcher
server.on("request", (req, response) => {
    console.log("A request has been submitted")
})

// The port listener
server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})
```

If you execute `npm run start`, you will see that this console.log in our requests method, is not being triggered in our `console log`.

This is because the server started running, **but did not receive any requests**!

Which means that the event watcher did not trigger any "request events".

BUT

If you go to your `http://127.0.0.1:3000`, once you open that link, you will receive that `console log` in your terminal/CLI.

Try to `console log` the `req` parameter as well and see what it gives us back!
> Warning: it's a lot!

### Response (short: res)
This parameter will allow us to send back a HTTP response to our HTTP client.

When you open `http://127.0.0.1:3000` again, one thing that might catch your eye, is that the browser keeps on loading.

This is because there is **no specified responses being send back or when the response stops**!

This, we can do with the `response.end()` method.

We can even pass along a message, a status code or json through that method. But when passing along a json object, make sure that the HEADER accepts json as a response type.

```js
// The server object
const server = http.createServer()

// The event watcher
server.on("request", (req, res) => {
    console.log("A request has been submitted")
    res.end()
})

// The port listener
server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})
```

### Your turn!
Now it will be up to you to figure out how you can, for example, use the request.url method to send back a response specific to a certain url.

**Go to the exercise Markdown file** : [HTTP Exercise](./exercise.md)

## Well done! 
Time to go to the [next exercise](../README.md#exercises)!
