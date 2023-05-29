/*
*@autor: Rio 3D Studios
*@description:  java script server that works as master server of the Basic Example of WebGL Multiplayer Kit
*/
var express  = require('express');//import express NodeJS framework module
var app      = express();// create an object of the express module


app.use("/public/TemplateData",express.static(__dirname + "/public/TemplateData"));
app.use("/public/Build",express.static(__dirname + "/public/Build"));
app.use(express.static(__dirname+'/public'));

http.listen(process.env.PORT ||8080, function(){
	console.log('listening on *:8080');
});
console.log("------- server is running -------");