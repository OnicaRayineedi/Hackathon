
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://patientlist:patientlist@ds161950.mlab.com:61950/patient';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});