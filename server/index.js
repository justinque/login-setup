//Importing Express
const express = require('express');
//Importing Body-Parser
const bodyParser = require('body-parser');
//Importing Express-pino-logger
const pino = require('express-pino-logger')();
//Creating a variable with the value of express function
const app = express();
//Express will utilize Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Login Page
app.get('/login', (req, res) => {
  res.render('login.ejs')
});
// Register user's
app.get('/register', (req, res)=> {
  res.render('register.ejs')
})
//Express will utilize pino
app.use(pino);
//Express will excute the below function once route is hit (Utilizing Express Routing)
app.get('/api/greeting', (req, res) => {
    //Creating a var to obtain the string 'World' as it's value
  const name = req.query.name || 'World';
  //Result header will be set to json formatted content
  res.setHeader('Content-Type', 'application/json');
  //Results will place var name into response using JSON stringify() [Concept similar
//to handlebars are utilized]
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

//Express will utilize port 3001
app.listen(3001, () =>
//Once port is connected to coded server; a console.log will render in the inspect
  console.log('Express server is running on localhost:3001')
);

//In Package.json scripts added : "server": "node-env-run server --exec nodemon",
//Invokes the server once executed in terminal - do not utilize tab button
