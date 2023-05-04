
// To set up a NODE/EXPRESS server you would do the following:

// 1. Create a web server using node. This is done by creating a JS file and giving it specific requirements.
    const http = require("http"); // This is a library that provides a basic API through which HTTP requests can be created and executed from within your model.

    const port = 3000; // This variable tells the code what port we're going to be listening too for our server.
                       //a port are endpoints of communication; Valid port numbers can be 1 through 65535.

    const server = http.createServer(function(request, response) { // This function sets up our actual server. Its passed a function that will fire everytime its called.
    if (req.url === '/') {
       res.write('Hello World'); // Will print on browser everytime server is refreshed.
       res.end();
    }    
})

    server.listen(port, function(error) { // This function sets up our server so that it listens to the port we want it too.
            if (error) {                  // The error parameter is used to produce a message if there was an error.
                 console.log("error", error) // error is places here so that it's easier to track where the error is coming from.
            }  else {
                console.log("all good", port) // Port shows what port the server is listening too.
        }                            
    })


// 2. In order to run our server we would run the following command in the terminal.
    // node app.js    *NOTE app.js is the name of the file we want to run

    // To END or STOP running a server you would go into the terminal and use constrolC on the keyboard.


// 3. Now to start using EXPRESS your going to run the following commands in the terminal.
  // *NOTE this same process is used in React as you want a different package to manage the backend part of the application.
    // npm init -y     *THIS will set up a basic JSON package, afterwards the file node_modules will have appeared.
    // npm i express   *Used to install EXPRESS
    // npm i --save-dev nodemon   *DEV is a dependecie that only uses pacjages during development. *NODEMON allows us to esially restart the server evertime chages our made.


// 4. To make NODEMON work you would do the following in the JSON file.
    // under the "scripts" category you replace "test" with the following: "devStart": "nodemon serverFileName.js",


// 5. you can now manual restart the server using NODEMON with the following command. 
    // npm run devStart   *NOTE this is not neccesary to restart the server it's just usefull to know.


//6. NOTE that this section must be on a diffent file then the above section intended to set up the server.
  // Express is a framework that manages the stack we create and the server allowing them to communicate and work together.
  // What this means is that as our app grows we won't have to write as much code.

// Create an ENVIRONMENTAL VARIABLE, meaning define the port outside of the application.
// start with: set PORT=5000

const express = require('express'); // This makes it so that you can use the express library in the file.
const app = express(); // creates an application so that a server can be set up and used.
app.use(express.json()); // This is what allows us to use middleware in the application

const port  = process.env.PORT || 3000;
app.listen(port, () => console.log(port)); // listen is a method that bind itself to PORT (or 5000) and execute the stack once it has connected to the server.
// IT can also contain a function that will fire everytime the server starts up.
// To run my express page on local host I would do the following in the console: node fileName.js


//7. Now, we want to: npm i env
// then we want to create a file called .env and in that file write: node_modules
// This makes it so we don't push all our dependencies or info we don't want to share like API keys and passwords.

//8. In order to connect out node server to MONGOdb we need install and use: npm i mongoose


//9. follow the steps from the MONGOdb website to start building a data base.
// under security, press quickstart, and start creating a new user by filling out a name and password then create user. 
// connection should be from my local environment.
// to allow access to the database from anywhere the IP adress should be: 0.0.0.0/0 with the description as anyone can access.
// Nexr go back to databse, press connect, copy the connection string and do the following in you app main file.

// Notice the diffence witht the password (the one created in MONGO) and the text after .net with that of the string below.
'mongodb+srv://daniellanthier2:<password>@cluster0.vhpcoay.mongodb.net/?retryWrites=true&w=majority'
mongoose.
connect('mongodb+srv://daniellanthier2:3XmThZeWsPNGzWP3@cluster0.vhpcoay.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => { // used because connect is a promise
    console.log('database connectd sir!')
}).catch((error) => { // used because connect is a promise
    console.log(error)
})


//10. See line 799 for how to customise out databases and schemas in mongoDB.




// Console logs
// Work the same in NODE as they do for JS.
console.log(varibleName);
// Another method to use but this time from the terminal is NOTE this must be installed:
// jshint filename.js

// MODULES
// In JS when you create a function it can be used globally (as in multiple times and in different files). This means that potential errors
// arise from having functions with the same name of functionality. Modules fix this problem by creating/putting an apps functions in specific
// building blocks (modules), which can then be moved around and used. NOTE that every file inside a node app is considered a module.
// Think of an API that shows images and a description. Modules would be used and broken down in a way where HTML wouldn't have to be repeated.
// The main file of the application would be the main module.
// *NOTE that node has a list of built in modules that can be found on their website.

// In order to make a module public, meaning the ability to use in in multiple files you would do the following:
let apiKey = "1234nfHBUY6";
module.exports.valueName = objectName;
module.exports.apiKey = apiKey;
module.exports.bob = apiKey;

// You can also export a single function:
module.exports = functionName;

// To load a module in another file you would do the following:
// "require" is the actual method that will include external modules to this file.
const moduleComponent = require('./fileName'); // CONST is best practice as you normally don't want them to change.


// MODULE WRAPPER FUNCTION
// Is what you would use if you DON'T want your function to be on a global scale.

(function(exports, require, module, __filename, __dirname) {
   let apiKey = "1234nfHBUY6";
   module.exports.apiKey = apiKey;
   exports.apiKey = apiKey; // These two are of the same format.
});


// PATH MODULE
// path module is used for handling and transforming file paths. This module can be imported using the following syntax:
var path = require("path")
// and can now be used inside other methods as such.
var pathObt = path.parse("fileName");


// OS MODULE
// Provides information about the computers operating systems such as available memory.
const os = require("os");
let totalMemory = os.totalmem(); // will provide info about hardwares memory.

// FILE SYSTEM MODULE
// allows you to work with the files on your computer
const fs = require("fs");
const files = fs.readFileSync("./fileName"); // This is an example using a Synchronous methods.
console.log(files); // will output all the files in this LEARNINGNODE program as a string in an array.

// This is an example using an Asynchronous method.
fs.Dir("./fileName", (err, files) => { // Notice it requires a callback function (covered down below)
  if (err) {
    console.log(err, "error")
  } else {
    console.log(files, "files")
  }
})


// EVENTS MODULES
// is basically a signal that indicates that something happened in out application.
// It is convention while using these methods to capitalize the first letter.
// *NOTE that these module are CLASSES, so the syntax and way you go about using them will follow those parameters.
// EMIT: takes an event as a parameter in the form of a string. This event can now be called on and when an 
// eventLsitener fires it will trigger that original EMIT method and whatever else is defined below it.

const EventEmitter = require("events");
const emitter = new EventEmitter; // Notice class syntax.

emitter.addListener("eventName", ()=> { // This is a litener event that is tracking when the parameter "eventName" is being called.
    console.log("it worked") // Only with this listener will the console.log trigger after the "evenName" method has fired.
})

emitter.emit("eventName") // This is the event emit is tracking, but alone this method won't due anything

// event can also have arguments that require certain parameter in order to trigger an emit and pass on code.
emitter.addListener("event", (arg) => {
  console.log("it worked", arg)
})

emitter.emit("eventName", { id:1, url: "http//" }) // Here emit was passed in an object as a parameter.


// EXTENDING EVENT EMITTER
// Allows you to use a class and its methods as if it was and EVENT MODULE class, meaning it takes on the event class functionality.

// file with class
class personsCounter {
  constructor() {
    this.currentPersons = 0;
  }
    entry() {
      this.currentPersons++;
  }
    displayPersons() {
      console.log(`Number of persons in buildin ${this.currentPersons}`)
  }
}


// Main file your exporting the class too.
const personsCounter  = require("./classFile");
const personsCounting  = new personsCounter;
personsCounting.displayPersons();


// NOW changing this class so that it contains EventEmitter functionality.

// file with class
const EventEmitter = require("events");

class personsCounter extends EventEmitter { // with this change the personsCounter now inherits the eventEmittet class functionality
  constructor() {
    super();
  }
    displayPersons(male, female) {
      this.emit("peoples", male, female)
  }
}

module.exports = personsCounter // NOTE the exporting

// Main files class is being exported too
const personsCounter  = require("./testing");

const counterInstance  = new personsCounter();

counterInstance.on("peoples", (male, female) => {
    console.log(`number of peoples ${male} ${female}`)
})

counterInstance.displayPersons("22", "45")


// USING A PACKAGE
// how to use an NPM package in your file
var_ = require('packageName');


// CLONING PACKAGES
// When you clone a project to install its dependencies all you need to do is the following:
// This works because NPM copies the dependencies from the apps JSON file
// npm i

// PUSHING APP WIHTOUT DEPENDENCIES
// you push projects without their denpendencies to avoid pushing large amounts of data.
// Start by creating a folder called: .gitignore and inside of it write the varaible: node_modules/ 

// CHECKIN NPM versions
// npm list
// npm list --depth=0     used to only check installed dependencies

// SERMANTIC VERSIONING
// is how packages display versions in JSON
// they are broken down in the following order: Major.Minor.PAth = 4.12.6
// Major can break previous versions of a program, patch is to fix bugs, minor is for changes that won't break previous versions.
// ^ in front of the versioning allows for programs to be updated.
// ~ in front of the versioning allows for programs to only update minor/patch changes.
// If no sign is placed in front of the versioning it means that only that exact version can be installed.


// UPDATE PACKAGES
// to view if denpendencies are out of date as well as update reconmendations use the following: npm outdated
// To install out of date packages: npm i -g npm-check-update


// SAVE DEPENCENCY
// To save a package as a denpencie meaning its not pushed during deployment you would do the following: npm i packageName --save-dev


// GLOBAL PACKAGES
// are dependencies that are not dependent on a project. An example of this is NPM.
// To install a package globally do the following: npm i -g packageName
// To view outdate global denpendencies: npm -g outdated
// uninstall global packages: npm un -g packageName


// RESTFUL SERVICES
// Most applications use HTTP protocal to access a variety of services on our server. Cliens can acess these services with using those same
// HTTP protocols to create, read, update, and delete data, or withint coding terms GET, POST, PUT, DELETE.

// This is the basic set up that I already defined above but here we can now go move into depth regarding the HTTP methods.
// The difference however is we are no longer using a list of IF statement to define routes and fuctions, rather we're using GET/SEND.
const express = require('express');
const app = express(); 

let array = [1,2,3,4,5];

app.get('/api/pageName', (req, res) => { // GET is asking to retrieve information from whatever URL i defined
    res.send(array); // SEND is sending date from a data base (in this case the above array), to the client.
})

app.listen(3030, console.log("hello"));



// ENVIRONMENT VARIABLES
// When we deploy an app the port is not given a specific value as it is dynamically assigned, as such we use an environment variable.
// The value of the varible is defined outside the application and is done with the process methods:
const port  = process.env.PORT || 3000; // This method means that the variable port is whatever it is defined as or to use port 3000 if its not.

// Now within the terminal you would write: set PORT=5000
// This makes it so the port is defined outside the application.
app.listen(port, () => console.log(port)); // This is to set the server to the port and test that its working.

//ROUTE PARAMETERS
// are used to GET specific routes/pages/data. SO if I wanted to get the second element of my array:
let array = [2,3,4,5];

app.get('/api/pages/:id', (req, res) => {
  res.send(req.params.id); // params is a keyword that can be translated to the : we defined above.
})                         // On the /api/pages/:id, page I would find ("") where blank is whatever we types into the scearch bar.

// You can also define multiple parameters:
// in the scearch engine you'd go too: localhost:5000/api/pages/27/3/2023
// Thus is the broswer you'd fine a JSON array with the values of whatever you placed in the scearch engine.
app.get('/api/pages/:date/:month/:year', (req, res) => {
  res.send(req.param); 
})


// QUERY PARAMERTERS
// are used to provide optional information to our backend and is defined with (?).
// The following is typed in the browser: localhost:5000/api/post/8/8?sortBy=year
app.get('/api/post/:month/:year', (req, res) => {
  res.send(req.query); // The Browser would print out whatever I entered in the query
})


// GET REQUEST
// The following are use example of the GET method (retrive information from an API).

// find()   is a method that returns ALL occurences of the given parameters.
// parseInt()   turns a string into a boolean.

// NOTE that these exanples do not include the mandatory express server set up.

let persons = [ // This array is used to simulate an API.
  {id: 1, name: "daniel"},
  {id: 2, name: "paul"}
];

app.get("/api/persons", (req, res) => {  // This first function is used to retrieve all of the different people I have in my array/api
    res.send(persons)
})

app.get('/api/persons/:id', (req, res) => { // This function is used to FING a person to match a specefic criteria.
  const person = persons.find(value => value.id === parseInt(req.params.id)) // This function is used because FIND requires a boolean not a string.
     if (!person) return res.status(404).send("NOPE"); // Status and sent string for if it doesn't work.
     res.send(person) // This will print out all the info for the specific individual.
})



// EXPRESS ROUTER
// is an express method that treat a file of routes as a module you can export as in the example below:
// this becomes most usefull when you want to reuse middle ware and when working in larger applications.
const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  //with this router function working as middlesware, it will fire the .get request when it a user opens a /login page.
});

router.post('/login', (req, res) => {
  // handle POST request to /login
});

module.exports = router;

// Main app
const authRouter = require('./auth-router');

// .use applies whatever middles ware was defined in the file, to the varialbe on the right.
app.use('/apiPage', authRouter); // This is what will be called when we are trying to connect this backend calling stuff to a front-end application.


// PROXY
// when running a backend and frontend part of an application they naturally run on 2 different ports. It makes the process generally easier this way.
// However what this means is that all the routes and API request would be conencted to one and not the other. So, to solve this issue thus allowing all
// kinds of request to work through the same port as in:
app.get('/api', (req, res) => {
    res.send('Sup from express land')
})

const users = require('/api');

// we sent up a proxy in the client side JSON package right under private as such:
//  "proxy": "http://localhost:5000",
// for normal deployment we'd use the url of our website.
// So, the proxy tells our server to sent all unknown request to the URL provided thus using 2 seperate ports as one.


// But we still need a block of code to actually connect the two using COMPONENTDIDMOUNT,
// is a method that triggers a response after something has been changed/added to the dom.
// it is most commonly used for fetchin api calls or in this case communicating with our server in order to display data.



// POST REQUEST
// is used to create a new item in our array/API.

// As an example:

app.use(express.json()); // This is middleware that can be used in the REQUEST processing pipeline and will allow us to use the BODY method.

app.post("/api/persons", (req, res) => {
    const newPerson1 = {
        id: persons.length + 1, // later on when we use data bases the ID will be assigned so this is unnecessary.
        name: req.body.name // BODY is a chunck of data that contains actual HTTP information and as default IS NOT enabled in express. This is the NEW item.
  };
  persons.push(newPerson1); // This is pushing the new item to the array/api
  res.send(newPerson1); // This is returning the value of "ID" the new item we create in the server to the client.
})

// *NOTE* that at this pote the chrome extension POSTMAN can be used here to test the endpoints of a post request.



// INPUT VALIDATION
// means to validate what the user enters into an HTTP request. Now if you were to write the logic yourself you would create a list of IF statements
// in the app.post object and filter through input that way. But a more common solution that works on larger scale projects where the object we're 
// trying to validate could be complex, is to use the NPM package: NPM JOI

// 1. npm i joi

// 2. Inport/store Joi at the stop of the application:
const Joi = require("joi");

// 3. define an object. Meaning create the credentials and limitations of the object we're wokring with, as in < than 3 numbers.
// *NOTE this is done in the api.post object.

app.post("/api/persons", (req, res) => {
  const schema = Joi.object ({ // schema as a nameSake is madatory
    name: Joi.string().min(5).required() // So here the NPM pacakge is creating limitations for the NAME object wherein it must be a string, atleast 5 characters and it mandatory. 
  })

  const result = schema.validate(req.body); // This function is what actually validates that our new objects meets the schema standards.
    if (result.error) {  // This is checking if the name I entered cleared my schema and if it didn't it will continue to execute code. 
        res.status(400).send(result.error); // will respond with a 400 status (invalid input), and then send that result with an error message (Joi function) to the user.
        return;
    }

    const person = {
        id: persons.length + 1, // This is defining the new ID and NAME for my object. This would be done automatically if using a database service.
        name: req.body.name 
  };
  persons.push(person); // Pushes the user input, as defined in the persons variable to the persons array/api
  res.send(person); // Pushes newly defined object to application.
})

// Because the validation process can be used in mulitple HTTP methods we're going to create a function for it
const validatePerson = (person) => {
    const schema = Joi.object ({ 
    name: Joi.string().min(5).required() 
  })

  return schema.validate(person); 
}

// PUT REQUEST
// Used to update a current object in an API

app.put('/api/persons/:id'), (req, res) => { // We have to select a specific ID here because we're trying to update 1 person and not several.
  // 1. Look up the person in out array/api
  // if person does not exist return a 404 status (resource not found)
  const person = persons.find(value => value.id === parseInt(req.params.id)) 
  if (!person) return res.status(404).send("NOPE"); 

  // 2. Validate the state of the updated object.
  // If invalid return status 400 (invalid input)
  const { error } = validatePerson(req.body) // function as defined above
    if (error) {  // so if the validation process throws and error it will be stored in this deconstructed error variable and used through out the function.
        res.status(400).send(error); 
        return;
    }

  // 3. Update the array/api witht the new object
  // return the update person to the client 
  person.name = req.body.name 
  res.send(person)
}


// DELETE METHOD
// used to deleter objects in array/api

app.delete('/api/persons/:id', (req, res) => { // NOTE that once again we are specifying an ID route.
  // Look up the person in array/api
  // If person is not existent throw a 404 status
  const person = persons.find(value => value.id === parseInt(req.params.id)) 
  if (!person) return res.status(404).send("NOPE"); 

  // delete the person from array/api
  const index = persons.indexOf(person) // IndexOf returns the first occurance of variable in an array
  persons.splice(index, 1)

  // return the person we removed from array/api
  res.send(person)
})


// MIDDLEWARE FUNCTION
// is a function that takes in a request object and either returns a value to the client or passes control over to another middleware function.

// This would be a basic example of one.
app.get('/api/pageName', (req, res) => { 
    res.send(array);
})

// Any middleware function will use something called the request preocessing pipeline. The idea behind this is that when a specific request goes to a server
// it must mass through this pipeline that contain 1 or more middleware functions. Each of which can either terminate the request/respose cycle by returning a response
// object to the client or pass control over to another middleware function. 


// CUSTOM MIDDLEWARE FUNCTION
// Express contains many of these pre-made middleware functions, but we also have the ability to create our own custom ones.
// It is good practice to also place each seperate middleware function in their own file.
// *NOTE that middlewware functions are called in sequence so the order in which they are written is important.

app.use functionName(req, res, next) { // USE is a method that allows us to install a middleware function in a pipline. 
console.log("middleware checking")
next(); // NEXT means to pass control over to the next middlesware function in the cycle and is neccesary or else it will create a never ending loop.
}


// This is how you would import a middleware function from another file.
function log(req, res, next) {
console.log("exported midleware");
next();
}

module.exports = log;

// NOW loading that module
const logger = require('./logger');
app.use(express.json()); // Remeber express.Json parse is a method to accept a JSON object and return it as code we can use. It populates the req.body property.


// BUILT IN MIDDLEWARE
app.use(express.urlencoded()); // This is a a body parser for HTML POST forms.

app.use(express.static('public')); // This is used to serve static content like text or images.


// THIRD PARTY MIDDLEWARE
// There are additional express packages that can be downloaded all with specfic uses.


// ENVIRONMENTS
// is the context of our app being deploayed wheter be it for developers or for users. An example of this is the console logging, which we don't want users to see.
// To cerify what the current environment is you'd use the following:
console.log(`NODE_ENV: ${app.get('env')}`); // Will provide the current environment state.

// To set the actual environment you'd do the following in the termial:
// NODE_ENV=production   or   NODE_ENV=testing   or   NODE_ENV=staging


// CONFIGURATION SETTINGS FOR APPLICATION
// what this is is a collection of files that will load different information about the app based on which environment you have set.
// This is used for passwords as you want to see them in staging/testing but not production so you would omit that information in the config files.
// Those secret files are store in a file called: custom-environment-variables.json
// *NOTE it is best practice to create a config file, (view for details about what goes into it).
// the npm package config is a common tool used to do this.

// This is how you'd load those config file into a file:
const config = require('config');

// How you'd use config to retrieve certain info"
console.log('application Name: ' + config.get('name')); // Accesing name variable set in config file.
console.log('Mail Server: ' + config.get('mail.host')); // Accesing sub category of mail.

// these apply the same logic when we want to store infomation such as passwords in our enviroments:
// first open the environment you want to save the password data in and then in the terminal:
// set appName_password=1234
// To access our passwords in the proper environment:
console.log('Mail Server: ' + config.get('mail.passwordVariable'));


// TEMPLATING ENGINES
// is the format the of the response takes. Up till now we've been using JSON but for apps we'd want to return HTML.
// There are NPM packages to do this and the one we'll be using is pug: npm i pug
// Next at the tap of the app we do:
app.set('view engine', 'pug'); // Express will internally load this module which is why it's not neccesaru to require it.
                              // View engine is what allows us to render HTML pages using pug, (template files).
app.set('views', './views'); // This is an optional setting used to overide the default pug file.

// Next create a folser called views, and inside a file called index.pug. View there for more details.

// To render pug file:
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello world', message: 'you dumb'}); // index is the page of the pug file.
})


// FILE STRUCTURE
// whileusing express it is good practice to seperate routes and modules from the main file. So like every request.
// In the new file where we've placed our methods we'd do:
const express = require('express');
// A router is an express function that allows us to use HTTP words (get, put) through different files.
const router = express.Router(); // This makes it so we are working witht router object and not the app object.

// as for the functions we're exporting
app.get('/:id', (req, res) => { // notice we are not calling api/course
  console.log('sup')
})

// And at the end we export it
module.exports = router;

// Next we want to load the module in the main app
const courses = require('./fileName'); // course is the name we place in the line below.

app.use('/api/course', courses); // What this means is that any route for api/course must use the COURSE router loaded through our custom module.



// SYNCHRONUS V. ASYNCHRONOUS

// synchronus or blocking programs mean that code is executed in the order it is written. So as an exmaple if you had two console logs
// with synchronus code the second function would fire only after the first one. Think of a waiter who can only take one order at a time 
// while waiting for the food to be prepared.
console.log('hi');
console.log('bye');
// Terminal output: hi bye

// an asynchronus or non-blocking program in constrast allows you to start running one line of code while another
// is line is busy completing a different task. Think of a waiter who can take multiple table orders at a time without waiting for food to cook.
// *NOTE Asynchronous functions always return a promise.
console.log('hi');
setTimeout(() => {
  console.log('not yet')
}, 2000) // means 2 seconds
console.log('bye');
// Terminal output: hi bye not yet

// The reason this is important is because when making a request to a database the response may take a few seconds to return, 
// So, in the meantime other functions that may depend of that response won't fire and you'd end up getting an error. There are 3
// different methods that can be used to fix this.



// CALLBACKS
// Callbacks are a way of passing a function as an argument to another function, and it gets executed after the first function has completed.
function print(callback) {  
    callback(); //is the actual function name that fires when the asynchronous object is ready.
}

// Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.
// the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened.
// They are mostly used when setting a timer with setTimeout() and registering event listeners on a DOM.


// As a more complicated excample 
// function
function greet(callback) {
    console.log('oh no');
    callback();
}

// callback function
function callMe() {
    console.log('a callback function!');
}

// passing function as an argument
// Here I'm calling the greet function. Its parameter callback points to the callMe function.
// which means that greet wont terminate without first callMe being executed.
greet(callMe);




// PROMISE
// is another method to deal with asynchronous code and represents the object of a task that will eventually be completed.
// it is used when retrieving data from an API or when handling multiple ASYNC objects where you don't know how long it will take to get a res.
 // Promise is a constructor function, so you need to use the new keyword to create one. 
 // It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise.
 // Often used for error messages, like if a password doesn't match on in an API. And are most usefull when you don't know how long something will take like a server request.
const myPromise = new Promise((resolve, reject) => {  //'new Promise' is neccesary syntax while 'myPromise', is the name of the promise function.

});

  /* A promise has three states: pending, fulfilled, and rejected. The promise above 
    is forever stuck in the pending state because you did not add a way to complete the promise. 
    The 'resolve' and 'reject' parameters given to the promise argument are used to do this. 
    resolve is used when you want your promise to succeed, and reject is used when you want it to fail.
 */

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Password worked");
  } else {
    reject("password did not work");
  }
});


// Then
  // 'then' is a method that executes after a promise is fulfilled with resolve.

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true; // responseFromServer is set to true to represent a successful response from a server
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

  makeServerRequest.then(result => {
    console.log(result) // This whill output "We got the data".
});

// Catch
  // similarly the 'catch' method is used when promise reject method is called.
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false; // This state must be defined within the promise and not called outside it like its its own function.
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error); // Will output 'Data now received'.
});


// PROMISE.ALL
// is another method used on the promise class that will wait for the result of an entire array of messages.
// The list of results from all the pormises will be in the form of an array.
// *NOTE that if one of the promises fail the entire array will returned as failed.
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Password worked");
  } 
});

Promise.all([p1, p2])
  .then(result => console.log(result)); // output will be result array.
  .catch(error => console.log(error));


// PROMISE.RACE
// works the same as promise.all execpt it will only return the very first result it gets from the listed arrays.
Promise.race([p1, p2])
  .then(result => console.log(result));
  .catch(error => console.log(error))




// ASYNC/AWAIT
// It is used when retrieving data from an API vis FETCH(), and awaiting the result before updating the application.
// You would use this when you want to wait for the result of a function (waiting for a promise to be fullfiled),
// as compared to a promise where it may return a value that is not yet ready.

// ASYNC // allows you to write asynchronous code that looks and behaves like synchronous code.
const getData = async() => {
  var data = "Hello World";
  return data;
}
      
getData().then(data => console.log(data));

// AWAIT is used to wait for the result a promise and can ONLY be writting in an ASYNC code block.
// Await suspends the called function execution until the promise returns a result for that execution.
// If you have one asynchronous function that is dependent on anothr then use AWAIT. but if you need multiple functions to run 
// in parallel then use a promise.
const getData = async() => {
  var y = await "Hello World";
  console.log(y);
}
      
console.log(1);
getData();
console.log(2);


// TRY
// Is a way to test a block of code. It literally means try this code before moving on.
async function tryThisCode() {
  try {
    const user = await getUser(1);
    console.log(user);
  }
  catch(error) {
    console.log(error.message);
  }
}

// Here is a full example of await/async
async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log('Customer: ', customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log('Top movies: ', movies);
    await sendEmail(customer.email, movies);
    console.log('Email sent...');
  }
}
notifyCustomer(); // Callling function

// the following would be the callbacks but are now promises.
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  });
}

getCustomer();

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}



/* THE FOLLOWING DETAILS HOW TO USE MONGODB */

// SCHEMA
// a schema represents the structure of a particular document, either completely or just a portion of the document and being created as followed:
// *NOTE that a schema can take the following data types: string, number, date, buffer, boolean, objectID, array
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  release: Date,
  tags: [String], // Tags are they're own object, and are used to create an array within the object and mostly used for quering/filtering capabilities.
  date: {type: Date, default: Date.now}, // This would be how you set the date to the current date, (continually updates)
  isPublished: Boolean
});


// MODEL
// is an instance of a schema the same way an object is an instace on a class.
// The job of the model is to provide methods like updating/deleting documents in the database collection and to provide an 
// interface for us as the programmers to interact with those different schemas.

const Book = mongoose.model('collectionName', bookSchema); // NOTE that this takes the syntax of a CLASS, so it is NOT a variable.
// The first argument is the name of the collection this argument is for. NOTE this will be defined in mongoDB.
// The second argument is the schema that defines the shape of the documents in this colleciton.


// SAVING DOCUMENT TO MongoDB
// The save method is an asynchronous operation as it will take time to save to the database so we will use async/await on it.
book.save();

// Now we are creating an instance of the Book class by defining an object.
// MongoDB will assign a specific course Identifying to the save function, an ID we can access via result.
async function createBook() {
  const book = new Book({
    title: 'Hamnet',
    author: "O'Farrel",
    release: '2019',
    tags: ['fiction', 'historical', 'shakespear', '14th century'],
    isPublished: true,
  })
}

const result = await book.save(); // The save method
console.log(result); // To view MongoDB ID

createBook();



// RETRIEVING DOCUMENTS
// This is how you would retrieve information from MongoDB
async function getBook() {
  const book = await Book.find(); // The find method is what retrieves the documents.
  console.log(book);
}

getBook();

// Filters can also be applied so that we narrow the scearch.
async function getBook() {
  return await Book
    .find({ author: "O'Farrel", isPublished: true }) // These are the specifications we set to narrow a scearch.
    .limit(10) // specifies how many individual documents the find method is allowed to return.
    .sort({ name: 1 }) // Is how we can sort the results of our scearch. 1 will be in accending order while -1 is decending.
    .select({ tags: 1 }) // specifies how many indivual propertys of an object we want to retrieve, so in this case 1 of each. 
}

async function run() {
  const books = await getBook();
}

run()

// Retrieving DOCUMENT QUERYS
// a list of more nich querys we can use to filter objects from mongoDB.
// *NOTE that this list is mongoDB specific.

// er (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)

async function getBook() {
  return await Book
    .find({ price: { $:10 } }) // This filters out any books whose price is greater than 10. The $ refers to the fact that we are using an object.
    .or([{author: 'Mosh'}, {isPublished:true}]) // will fiter books that meet either parameter, 2 parameters are necessary. 
    .and([{author: 'and'}, {isPublished:true}]) // The same concept applies when using and
    .find({ author: / can use regexs / })
    .count() // count will return the number of documents that match Book.
    .skip() // will skip what ever array element is defined when calling this function, usually combined with .sort()
}

await getBook();


// UPDATING DATA ON MONGODB
// There are 2 different methods to do this and will be broken down as such.

// This input is best for receiving user input and verifying that it is valid.
async function updateBook(id) {
  const book = await Book.find(id); // check for a book with given ID.
  if (!book) return; // If there is no book.

  book.isPublished = true; // this is one way to change the status of isPublished
  
  book.set({
    isPublished: true // this is one way to change the status of isPublished
  })

  const result = await book.save() // saving new data to database
}

updateBook();

// The second approach is if the information being changed you know for a fact is correct.
async function updateBook(id) {
  const book = await Book.update( {_id: id}, {
  $set: { // this is an express operator that allows me to alter information from the database without fetching it first.
    author: 'daniel', // alteration
  }
});

updateBook();



// REMOVING DOCUMENT FROM MONGODB
async function removeBook(id) {
  const result = await Book.deleteOne({ _id: id });
  const result = await Book.deleteMany({ _id: id }); // allows you to delete more than one.

  // This is just another way to do it.
  const result = await Book.fincByIdAndRemove(id);
}

removeBook('idDetails')





// Authentication (are you are who you say you are) / Authorization (determining if the user has the permissions to do what they want to)
// generally there are multiple levels of authorization as you also want admins that can change information.

// They're are multiple new endpoints to add for this.
// firstly you want to register new users with some kind of post request.
// secondly you want some sort of login command that will use a post request as the POST method is used to send data (credentials), to 
// the server in order to update resources (webpage). It also insures that credentials are't exposed in the URL and allow the use of encryption
// with HTTP. Thus being common practice.


// Just like creating a Model for an object in a data base we do the same thing for users as they too will be stored in MongoDB with its parameters.
const registerUser =  mongoose.model({'User', new mongoose.Schema ({

  name: {
    type: String,
    required: true,
    minLenght: 5,
    maxLenght: 100,
    unique: true 
  },
  password: {
    type: String,
    required: true,
    minLenght: 5,
    unique: true 
  },
  email: {
    type: String,
    required: true,
    minLenght: 5,
    maxLenght: 225,
    unique: true // In mongoDB this ensures that all email address are unique meaning they're cannot be more than one
  }

  })
});


function validateUser(user) { // Using Joi it validates that what the user enters meets the parameters described below.
  const schema = {
    name: Joi.string().min(5).max(100).required(),
    email: Joi.string().min(5).max(225).required().email(),
    password: Joi.string().min(5).required(),
  }
  return Joi.validate(user, schema)
}

exports.User = User;
exports.validate = validateUser;

//

// The following would be in its own file and use to define roots to create these new user.
const {User, validate} = require('file location');
// other dependeices like mongoose, express, router

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.name }) // this verifys that the user trying to log into the database actually exist.
  if (user) return res.status(400).send('user already exist')

  user = new User({ // this retrieves the user input if it does already exist
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  await user.save() // saving user input
  
  res.send({ // displaying to the user what they entered/saved
    name: user.name,
    email: user.email,
    password: user.password
  })

})
// You would then need to do app.use, users in the main server file.

// Next we will install a package to encrypt the passwords as we don't want to save them in the database as they are.
// The package name is bcrypt
// Next we want to use a salt function with our bcrypt package. The reason for this is that bcrypt will write some sort of encryption 
// for out list of passwords, however a hacker could easily create a list a common passwords compare it to our password list and decoded
// the encryption. With salt it inserts a randomly generated string into our encrypted password making it difficult to understand which 
// value is related to our actual password and which one has been randomly generated.


const bcrypt = require('bcrypt')

async function run() {
    const salt = await bcrypt.genSalt(10) // This number reprsents how many additional digits will be added to the passwords, The longer it is the more secure but the longer it takes to update/save too.
    const hashed = await bcrypt.hash('1234', salt) // the hash function take 2 parameter, firstly the password of the user
                                                   // secondly the salt value (number of digits to add)
    console.log(salt)
}

run()

// Now bringing it all together

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.name })
  if (user) return res.status(400).send('user already exist')

  user = new User({ 
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  const salt = await bcrypt.genSalt(10) 
  user.password = await bcrypt.hash(user.password, salt)

  await user.save() 
  
  res.send({ 
    name: user.name,
    email: user.email,
    password: user.password
  })

})


// 

// JSON TOKENS
// This section is about authenticating the user data that we created above.
// Here we will start using a JSON web token as a response once user credentials have been validated. These tokens are generated
// when the client (website) makes a call to the server by trying to log in. The token in itself is a long string that acts like a password
// which can then be sent back to the server during future API call (logins). These token are stored in special storage spaces depending 
// on if it is a web application or a mobile app.

// A Json web token is seperated into 3 section, each section storing different kinds of data.
// The first section (header) will hold the algorithm name used to create the token, and the type of token it is (JSON).
// The second section (payload) holds 3 user properties. sub: the user ID, name: name of user, admin: authorization levels.
// The third section (signature) is a digitial signature created based on the content of the JSON token along with a secret.
// This secret is only available on the server. Meaning the token cannot be altered unless it is done on the server. Any alteration of 
// the token would be declined from the server. This also applies to the environmental varibles we set while coding. As the server 
// sees deployment as being different than production
// Additionally we want to store all the signatures of the token we create in a config file so their visible via our source code.

// To use these token we'd want to install the package: npm i jsonwebtoken

// start by importing NPM package at the top of the file.
router.post('/', async (req, res) => {
  const { error } = validate(req.body); // based of validation Joi function created above
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.name }) // finds/looks at entered user EMAIL data
  if (!user) return res.status(400).send('user already exist') // error response

  const validPassword = await bcrypt.compare(req.body.password, user.password) // compared entered password to the one in database
  if (!validPassword) return res.status(400).send('Invalid password')

  // This is what actually generates the JSON token
  const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey') ) //The first parameters we set he are the payload, 
                                                                         // section two of the JSON string. The second parameter is the 
                                                                         // private key of the Token which is stored in a config file.
  res.send(token) // will see the JSON web token.
})

// In a config file called custom-environment-variables.json:
{
  "jwtPrivateKey": "vidly_jwtPrivateKey" // will store the Key secret
}



// Headers
// are a way to associated the credentials of a user to the user themselves.
// In practical terms its what allows someone to stay logged into a website, as a header will
// retain the JSON token information. *NOTE that you don't always want this if your are using
// multi step verifications or want the user to be signed out once they leave the webpage.

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.name }) 
  if (!user) return res.status(400).send('user already exist') 

  user = new User({ 
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  const validPassword = await bcrypt.compare(req.body.password, user.password) 
  if (!validPassword) return res.status(400).send('Invalid password')

  const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey') ) 
  res.header('x-auth-name', token).send(user) // So with this code the header takes in the header name and the token details.
})


// AUTHORIZATION MIDDLEWARE
// the idea here is that we only want authenticated used to be able to access the post request above.
// This would we be put in its own folder to be inputed in the code above later on.
const jwt = require('jsonwebtoken')
const config = require('config')

// Essentially what this code does is 
function auth(req, res, nest) {
  const token  = req.header('x-auth-name')
  if (!token) return res.status(401).send("Access denied. No token will be provided")

// This verify method will verify the JSON web token, if its valid it will decode it and retunr the payload.
// its wrapped in a try catch block to make sure the token has first been assigned to the user.
try { 
 const decoded = jwt.verify(token, config.get('jwtPrivateKey')) // remember that we store token secret (part of what creates token)
  req.user = decoded // this will set the user as being verified// in a config file which is why we're calling it here.
  next()
}                                                              
catch (execption) {
  res.status(400).send('bad request, Invalid token')
}
}


// PROTECTING ROUTES
// we don't want all routes to be protected as some will need to be available publically. so, in order
// to do that we want to assign the middle ware function that we created above selectively.

// The idea behind a protected routes is that we would create a middleware function to verify that the users token is valid
// and has a valid secret, thus hindering none authorized people from just typing in a secure URL.

































// Epress routes 
// take the following structure: app.METHOD(PATH, HANDLER)
// METHOD: is an http fuction.
// PATH: is a relative path on the server and can be a string, or regular expression.
// HANDLER: is a function that Express calls when the route is mathced.
app.get("/", (req, res) => { // get is the http method, "/" is the path to out server (note that / means route path)
  console.log("Here");
  res.send("Hello Express"); // res is what we do once the server has been connected. NOTE, that when it is called like it is here it will close the request loop.
});


// Handlers 
// take the following form:
// req: is the request object, while res: is the response object.
function(req, res) { 
  res.send('Response String'); // So, here once the request object is found it will return this response object.
}

// This is an example of how you can respond to a request with an actual FILE. So that you may have a seperate HTML page is the request doesn't work.
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html"); // __dirname is node shorthand that means "the absolute path", as in it can't use any other.
});                                               // The rest is where the file can be located.


// Root level request / NEXT
// Is a request that fires regardless of the path the request is being directed too, (meaning no matter where the information is your trying to get).
// NEXT is a method that will trigger the next middleware function in the stack once its function has been called. 
// This is used to prevent infinite looping if the original request has no response.
app.get("/", (req, res, next) =>{ // IF "/", the path, was not specified this function would fire for every get request.
  console.log(req.mothod);
  console.log(req.ip);
  next()
}) 


// In basic terms MIDDLEWARE 
// is code that runs between a server request and its response.
// We can create calls to MIDDLEWARE, thus accessing its functionalities while its running. The verb USE is how we can access it.
// This idea can be extended of course so that a whole style sheet is called on, changing the web app.
app.use(express.static(__dirname + "/public")); // The use function is that allows us to access the middleware.
app.use("/public", express.static(__dirname + "/public")); // This is the same example except its accessing a public page.
app.post(express.static(__dirname + "/public")); // This would execute only for POST request.

app.use(function middleware(req, res, next) { // This is how you would write a function in middleware.
  console.log(request.method)// 
  console.log(request.ip) // These 2 are method that will log
  next(); 
});

// Middle ware can also be places with other middleware functions.
app.get('/user', function(req, res, next) {
  console.log(rez.mrthod)
  next();
})

app.get('/', function(req, res) {
  res.send(req.user);
});

// The above in transformed into
app.get('/user', function(req, res, next) {
  console.log(req.mrthod)
  next();
}, (req, res) => {
  res.send({
    time: req.time
  });
});

// GET
// is a method that is used to retrieve information from an API, without modifying anything.
// This is an example of a simple API where information is being pushed to a JSON file as an object then being printed back to the user as a string.


app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

// or
let object = {
  'Name' : "BOB",
}
app.get("/json", (req, res) => {
  res.json(object);
});



// ENV files
// *NOTE that in order to acess and process data from an env file you first need to download dotenv: npm i dotenv
// These our secret files not deployed with your application that contain content such as API keys and or database URL's, and configuration options.
// Variables in these files by convention are written in upper case and cannot have spaces: WEATHER_API_KEY=0054P
// Accessing these files can be done with the following: process.env.VAR_NAME

require("dotenv").config(); // This is a dotenv file function that allows us to acess .env files. CONFIG is a function that allows this process to happen.
process.env.VALUE_NAME // This is just an object that holds the value of the data we're trying to collect

// IF I am using multiple ENV files you would acess the different files with the following as .ENV would be the default file:
require('dotenv').config({ path: `.env.${process.env.VARIABLE_NAME}` });


// ROUTE PARAMETERS
// are names segments of a URL taken from an API (and theoretically entered by the user).
// the way this would be found on the server is the following: localhost300:/profile/boss
let people = {
  'boss' : {name : 'daniel', age : 23},
  'employee' : {name : 'scrum', age : 25},
}

app.get('/profile/:name', (req, res) => { // SO in this example the varible placed after the : (/:name) of the URL will contain the value of our API.
    let name = req.params.name // Params is a key word that contains the value of :/name
    res.json(people[name])
})


// QUERY PARAMETER
// is another way to get input from a user for URL parameters.
// the way this would be found on the server is the following: localhost300:/profile?name = boss
let people = {
  'boss' : {name : 'daniel', age : 23},
  'employee' : {name : 'scrum', age : 25},
}

app.get('/profile', (req, res) => {
    let name = request.query.name // Notice the difference here being the query variable.
    res.json(people[name])
})


// BODY PARAMETER
// IS how you can get a route for a URL from a form

//
app.use((req, res, next) => { // Root level request
  console.log(req.method + "" + req.path + " - " + req.ip);
  next()
})

var express = require('express');
const { default: mongoose } = require("mongoose");
var app = express();
require('dotenv').config();



const mySecret = process.env['MESSAGE_STYLE'] // ENV file

app.use('/public', express.static(__dirname + '/public')); // Rendering static page

app.get('/', function(req, res) {
  console.log("Hello world"); // Redenring style HTML page
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => { // Rendeering JSON file
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      "message": "HELLO JSON"
    })
  } else {
    res.json({
      "message": "Hello json"
    })
  }
});