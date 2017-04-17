
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://patientlist:patientlist@ds161950.mlab.com:61950/patient";
var insertDocument = function(db, callback) {
    db.collection('patientlist').insertOne( {
        "fname" : "onica",
        "lname" : "rayineedi",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"orr83@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});