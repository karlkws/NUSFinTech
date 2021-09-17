const express = require("express");
const data = require('./data'); 
// To import diff file in same folder, use ./ notation. If package, just use package name directly
// ./ means current folder, .. means folder above

//Create server application
server = express();
server.use(express.json()); // Tell server to use posted data in JSON format

// Create router object
router = express.Router();


// Define mappings
// Map URI to URL


// GET requests:

router.get("/", (request, response) => {
    // should have standard 2 args: request, response
    response.send("Welcome to Dev Toolkit #2!");
}); 

router.get("/sum", (request, response) =>{
    let x = parseFloat(request.query.x);
    let y = parseFloat(request.query.y);
    let sum = x+y;

    response.send("Sum is: " + sum.toFixed(1));
});

router.get("/user/all", (request, response) => {
    let users = data.get_all_users(); // get all the users
    response.send(users);
});

router.get("/user/by-uid", (request, response) => {
    let user_id = request.query.user_id;
    let user = data.get_user_by_user_id(user_id); // get a user based on user_id
    response.send(user);
});

router.get("/account/all", (request, response) => {
    let accounts = data.get_all_accounts(); // get all the accounts
    response.send(accounts);
});

router.get("/account/by-aid", (request, response) => {
    let account_id = request.query.account_id; // get an account based on account_id
    let account = data.get_account_by_account_id(account_id);
    response.send(account);
});



// POST requests:

router.post("/create", (request, response) =>{
    let name = request.body.name; // use .body for POST instead of .query, so that input will not appear in the URI/URL, for security purpose
    let phone = request.body.phone;
    let age = request.body.age;

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Phone: " + phone);

    response.send("Data received.")
});

router.post("/user/add", (request, response) => {
    let user = request.body; // Step 1: get user object from request
    data.add_user(user); // Step 2: add user 
    response.send("User added succcesfully!"); 
});


router.post("/account/add", (request, response) => {
    let account = request.body; // Step 1: get account object from request
    data.add_account(account); // Step 2: add account 
    response.send("Account added succcesfully!"); 
});





// Tell server to use created router mapping
server.use(router);

// Start server
// listen(server no, error) = Start server on port no., throw error message if any
// Ctrl+C in terminal to stop/restart server after making changes to main.js file 
server.listen(3000, (errors) => {  
    if(errors) {
        console.log("Server ecould not start. Error" + errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});
