/* 
	Create database, create collection and drop collection
*/
var adminuser = "admin";
var adminpass = "admin";
var server = "localhost";
var port   = 27017; 
var dbName = "myNewCreation";
var mongodb          = require('mongodb');
var mongoClient = mongodb.MongoClient;
var connString = "mongodb://"+server+":"+port+"/"+dbName;

mongoClient.connect(connString, function(err, db) {
    console.dir(err);
    if(!err) {
    	var collectionName = "employee";
        var condition = {
            empName: 'rinse' 
        }
        var canIAccess = "Yes baby, This is ++++";
    	//delete document
    	db.collection(collectionName).remove(condition,function(err,removed) {
        		console.log(removed);
                console.dir(canIAccess);
        });
    }
    else{
        console.log("Mongo DB could not be connected");
        process.exit(0);
    }
    db.close();
});