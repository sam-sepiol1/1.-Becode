# Let's build a REST API!

Using your new knowledge on making routes sending back information, we can now take it to the next step!

Let's build a recipe api.

## Instructions

- Create a list of data (list with objects) for at leasts 4 food dishes.
- each object (dish) should have:
    - name
    - timeToPrepare
    - ingredients
    - list of steps
- Have a route for every dish
    - only the corresponding dish should be send as a response
- the `/` route should give the whole list
- add a "info" page that explains how to use the API

> NOTE: Use POSTMAN as a tool to "mimic" the frontend

## Extra's
- create a .env file with a random secure key
- use a middleware to block all requests unless a correct key is beeing used as a body parameter in the request.

> NOTE: this is not about JWT tokens, just a simple key.

## Good luck!
![](../_assets/Cooking-with-will.gif)