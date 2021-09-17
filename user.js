const express = require("express");
const data = require('./data'); 

// Create router object
router = express.Router();

// GET

router.get("/user/all", (request, response) => {
    let users = data.get_all_users(); // get all the users
    response.send(users);
});

router.get("/user/by-uid", (request, response) => {
    let user_id = request.query.user_id;
    let user = data.get_user_by_user_id(user_id); // get a user based on user_id
    response.send(user);
});

// POST

router.post("/user/add", (request, response) => {
    let user = request.body; // Step 1: get user object from request
    data.add_user(user); // Step 2: add user 
    response.send("User added succcesfully!"); 
});


module.exports = {
    router
};