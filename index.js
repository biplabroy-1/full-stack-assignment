const express = require('express')
const app = express()
const port = 3001

const USERS = [];

const QUESTIONS = [{
  title: "Two states",
  description: "Given an array , return the maximum of the array?",
  testCases: [{
    input: "[1,2,3,4,5]",
    output: "5"
  }]
}];


const SUBMISSION = []

app.post('/signup', function (req, res) {
  // Add logic to decode body
  // body should have email and password
  const user = {
    email: req.body.email,
    password: req.body.password,
    prem: "user"
  }
  USERS.push(user);


  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)


  // return back 200 status code to the client
  res.send('Hello World!')
})

app.post('/login', function (req, res) {
  // Add logic to decode body
  // body should have email and password
  const email = req.body.email;
  const password = req.body.password;
  // Check if the user exists in the USERS array above
  const user = USERS.find(user => user.email === email && user.password === password);
  if (user) {
    // If the user exists, return back 200 status code to the client
    // Also send back a token (any random string will do for now)
    let token = Math.floor(Math.random() * 100())
    res.status(200).send("User Found")
  } else {
    // If the user does not exist, return back 401 status code to the client
    res.send('User Not Found')
  }

})

app.get('/questions', function (req, res) {

  //return the user all the questions in the QUESTIONS array
  res.send(QUESTIONS)
})

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  res.send(SUBMISSION)
});


app.post("/submissions", function (req, res) {


  // let the user submit a problem, randomly accept or reject the solution
  // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.post("/admin", function (req, res) {
  // Add logic to decode body
  // body should have email and password
  const email = req.body.email;
  const password = req.body.password;
  // Check if the user exists in the USERS array above
  const user = USERS.find(user => user.email === email && user.password === password && user.prem === "admin");
  if (user) {

    const quest = {
      title: req.body.title,
      question: req.body.question,
    }
    QUESTIONS.push(quest);

  } else {
    // If the user does not exist, return back 401 status code to the client
    res.send('User Not Found')
  }


})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})