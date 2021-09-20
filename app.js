const express = require("express");
// To import diff file in same folder, use ./ notation. If package, just use package name directly
// ./ means current folder, .. means folder above
const database  = require("./database");

//Create server application
server = express();
server.use(express.json()); // Tell server to use posted data in JSON format

router = express.Router();

// Tell server to use created router mapping
server.use(router);



router.get("/user/by-uid", (request, response) => {
    database.connection.query(
        `SELECT * FROM user WHERE user_id = ${request.query.user_id}`, 
        function (error, results) {
            if (error) throw error;
            response.status(200).send(results);
    });
});


// Start server
// listen(server no, error) = Start server on port no., throw error message if any
// Ctrl+C in terminal to stop/restart server after making changes to main.js file 
server.listen(3000, (errors) => {  
    if(errors) {
        console.log("Server could not start. Error" + errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});