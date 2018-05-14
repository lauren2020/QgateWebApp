var express = require('express');
var router = express.Router();


var list = [];
var list2 = [];
function Mac(name)
{
    this.name = name;
    this.issues = [];
}
var myMac = new Mac("C77NEW");
var myMac2 = new Mac("C77NEW2");
function Issue(data, machine, message, user) {
    this.id = "";
    this.data = data;
    this.machine = machine;
    this.message = message;
    this.user = user;
    this.date = "";
    this.teamResponsible = 0;
    this.addToPdi = false;
    this.otherMachinesFound = "";
    this.otherMachinesNotFound = "";
}


const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const mongodb = require('mongodb');
const assert = require('assert');
const url = 'mongodb://:@cluster0-shard-00-00-2a366.gcp.mongodb.net:27017,cluster0-shard-00-01-2a366.gcp.mongodb.net:27017,cluster0-shard-00-02-2a366.gcp.mongodb.net:27017/sandbox?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
const dbExtension = 'sandbox?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
const dbName = 'sandbox';
var db;

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    connect();
    var result = await resolveAfter2Seconds();
    console.log(result);
    displayIssues();
  }

function connect()
{
    MongoClient.connect(url, function(err, client)
    {
        console.log("In block");
        assert.equal(null, err);
        db = client.db(dbName);
        var data;

        
        var imagesCursor = db.collection('images').find({});
        imagesCursor.forEach(function (mac)
        {
            list2.push(mac);
            var myIssues = [];
            var thisMac = new Mac(mac.machineId);
            if(mac.machineImages[0])
            {
                var i = 0;
                for(i = 0; i < mac.machineImages.length; i++)
                {
                    var thisIssue = new Issue(getData(mac.machineImages[i].rawData),mac.machineId,mac.machineImages[i].imageMessage,"TestUser");
                    thisIssue.id = mac.machineImages[i].imageId;
                    thisIssue.date = mac.machineImages[i].date;
                    thisIssue.teamResponsible = mac.machineImages[i].team;
                    thisIssue.addToPdi = mac.machineImages[i].addToPdi;
                    thisIssue.otherMachinesFound = mac.machineImages[i].otherMacsWithIssue;
                    myIssues.push(thisIssue);
                }
            }
            thisMac.issues = myIssues;
            list.push(thisMac);
        });
        console.log("Succesful");

        client.close();

    });
    console.log("transfering");
    return 0;
}
function updateIssue(req)
{
  MongoClient.connect(url, function(err, client)
    {
  console.log("In block");
        assert.equal(null, err);
        console.log("assert")
        db = client.db(dbName);
        console.log("db set")
        var thisImId = req.body.id;
        var thisId = req.body.machine;
  var newMessage = req.body.message;
  var newUser = req.body.user;
  var newDate = req.body.date;
  var newTeam = req.body.teamResponsible;
  var newPdiStat = req.body.addToPdi;
  var newFound = req.body.otherMachinesFound;
  var newNotFound = req.body.otherMachines
  console.log(req.body);
  db.collection('images').update({machineId : thisId, "machineImages.imageId": thisImId}, {
   $set: {
     'machineImages.$.imageMessage': newMessage,
     'machineImages.$.user': newUser,
     'machineImages.$.date': newDate,
     'machineImages.$.teamResponsible': newTeam,
     'machineImages.$.addToPdi': newPdiStat,
     'machineImages.$.otherMachinesFound': newFound,
     'machineImages.$.otherMachinesNotFound': newNotFound
   }
});
        console.log("Succesful");

        client.close();
});

    console.log("transfering");
    return 0;
}

function displayIssues()
{
    console.log("displaying");
    var i = 0;
    for(i = 0; i < list.length; i++)
    {
        console.log("My Machine:");
        console.log(list[i]);
    }
}
function btoa(str) {
  var buffer;

  if (str instanceof Buffer) {
    buffer = str;
  } else {
    buffer = new Buffer(str.toString(), 'binary');
  }

  return buffer.toString('base64');
}
function atob(str)
{
  return Buffer.from(str.toString(), 'base64').toString('binary')
}
function getData(binaryIn)
{
  var src;
  var binary = "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";
  if(binaryIn != undefined)
  {
    var data = 'data:image/jpeg;base64,' + binaryIn;
    src = data;
  }
  else
  {
    src = 'data:image/jpeg;base64,' + binary;
  }
    return src;
}

asyncCall();

/***************************************************************** */
router.get('/set', function(req, res, next) {
	asyncCall;

});
/* GET users listing. */
router.get('/', function(req, res, next) {
      res.json(list);

});

router.put('/save', function(req, res) {

  updateIssue(req);

});

module.exports = router;
