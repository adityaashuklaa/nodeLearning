// Node.js Learning

- Chorme has v8 engine 
- firefox has spidermonkey
- Ryan Dahl is the developer of node.js, he extracted the v8 engine from browser to runtime.
- Node.js is a runtime environment for javascript.
- The difference between v8 engine and node.js in terms of features are v8 has DOM capabilites, window object whereas node.js is a server side language so it doesn't has UI level features, bit has additional features like cryptography and file handling.

- Server.js (Folder)
- When i tried to print the server logs each time a req is received, it is logging two times, one time extra because browser rerequest for the favicon.

## URL (Uniform Resource Locator)
- url package is used to parse the url.

## Express
- Express is just a framework, which make life easier. Internally it uses http module.

## Versioning
- 4.18.2
- .2 => Minor Fixes (Optional update)
- .18 => Recommended Bug fix (security fix)
- 4 => Major Release

## Mocakaroo.com
- It generates fake data for testing purposes

## Postman
- Postman helps with API testing and documentation

## MVC (Model, View, Controller)
- Controller manuplilates the model, and the model updates the view. This is the architecture and the flow of MVC model.
- User calls the route, route calls the controllers, and controller manipulates the models.

## ShortID
- ShortID is a package that generates short IDs.(nanoid)

## Server Side Rendering(SSR)
- When a HTML page is being rendered on the server is typically known as server side rendering, like next.js
- For generating html on the server end, and use server side rendering we use some template engines, like ejs (embedded javascript templates), pug, handlebars.

## Authentication
- Authentication basically have two patterns, one is statefull and another one is stateless
- Statefull : Which maintains state or data on server side
- This state can be sent by the server in the format of the cookies, response, headers
- Cons : In statefull based authentication, if the server is being restarted and for some reasons if the state if being lost, then all the users will get logged out from the application.
- Statefull authentication is memory intensive.
- Stateless : Which has no state
- In this method, the state is being sent in the payload and saved on the client side.
- jwt(json webtokens) is a example of stateless based authentication