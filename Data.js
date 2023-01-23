//Program requirements for the use of Websockets and fast-csv

const WebSocket = require('ws');
const socket = new WebSocket("wss://stream.aisstream.io/v0/stream");

const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("AISData.csv");

//Initialising the array of object to be used for storing the AIS data

const AISData = [{
            ShipId: "",
            ShipName: "",
            Latitude: "",
            Longnitude: "",
            Cog: "",
            Sog: "",
            RateOfTurn: "",
            TrueHeading: "",
            Timestamp: ""
}];

//Update function that writes the updated AISdata to a seperate CSV file

function update(){
    fastcsv
    .write( AISData, { headers: true})
    .on('finish', function () {
        console.log('CSV File with the AIS data created succesfully!');
    })
    .pipe(ws);
    console.log(AISData);}

// Exit function that will stop the programme runnging

function exitfun(){
    process.exit()}

// Opening websocket using provided API key and area of interest (long-  lat)

socket.onopen = function (_) {
    let subscriptionMessage = {
        Apikey: "e9a3f1f1782d4b64598db7868b01702444187602",
        BoundingBoxes: [[[57.140171, -2.085741], [57.1943, -1.9151]]]
    }
    socket.send(JSON.stringify(subscriptionMessage));
};

// When message is recieved from server, the AIS data is printed to the console and current data is pushed into the AIS data array

socket.onmessage = function (event) {
    let aisMessage = JSON.parse(event.data)
    if (aisMessage["MessageType"] === "PositionReport") {
        let positionReport = aisMessage["Message"]["PositionReport"]
        let metaData = aisMessage["MetaData"]

        console.log(`ShipId: ${positionReport["UserID"]} Ship Name: ${metaData["ShipName"]} Latitude: ${positionReport['Latitude']} 
        Longitude: ${positionReport['Longitude']} TrueHeading: ${positionReport["TrueHeading"]} Cog: ${positionReport["Cog"]}
        Sog: ${positionReport["Sog"]} RateOfTurn: ${positionReport["RateOfTurn"]}`);

        let date = new Date();

        var currentData = {
            ShipId: positionReport["UserID"],
            ShipName: metaData["ShipName"],
            Latitude: positionReport['Latitude'],
            Longnitude: positionReport['Longitude'],
            TrueHeading: positionReport['TrueHeading'],
            Cog: positionReport['Cog'],
            Sog: positionReport['Sog'],
            RateOfTurn: positionReport['RateOfTurn'],
            Timestamp: date
        };
        AISData.push(currentData); 
    }
};

//Timers are run to update the CSV file and exit the program

const updateInter = setInterval(update, 3600000);
const exitfunc = setInterval(exitfun, 3660000);


// 3600000 is 1 hour