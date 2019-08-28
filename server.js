//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/robot-front'));
app.listen(process.env.PORT || 4200);

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/robot-front/index.html'));
});

console.log("Console listenning")
// Start the app by listening on the default Heroku port
