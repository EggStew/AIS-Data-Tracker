//Program requirements for the use of Websockets and fast-csv

const WebSocket = require('ws');
const socket = new WebSocket("wss://stream.aisstream.io/v0/stream");

const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("AISData.csv");

const sqlite3 = require("sqlite3").verbose();

//Opening Connection to Local SQL Database

const db = new sqlite3.Database("./data.db", sqlite3.OPEN_READWRITE, (err)=>{
    if (err) return console.error(err.message);
  
    console.log("Connection Successful");
  });

// Opening websocket using provided API key and area of interest (long-  lat)

socket.onopen = function (_) {
    let subscriptionMessage = {
        Apikey: "e9a3f1f1782d4b64598db7868b01702444187602",
        BoundingBoxes: [[[57.2466, -1.8914], [57.0501, -2.1121]]]
    }
    socket.send(JSON.stringify(subscriptionMessage));
};

// When message is recieved from server, the AIS data is printed to the console and current data is pushed into the AIS data array

socket.onmessage = function (event) {
    let aisMessage = JSON.parse(event.data)
    if (aisMessage["MessageType"] === "PositionReport") {
        let positionReport = aisMessage["Message"]["PositionReport"]
        let metaData = aisMessage["MetaData"]

// Prints AIS Data Received to the console

        console.log(`ShipId: ${positionReport["UserID"]} Ship Name: ${metaData["ShipName"]} Latitude: ${positionReport['Latitude']} 
        Longitude: ${positionReport['Longitude']} TrueHeading: ${positionReport["TrueHeading"]} Cog: ${positionReport["Cog"]}
        Sog: ${positionReport["Sog"]} RateOfTurn: ${positionReport["RateOfTurn"]} Timestamp: ${metaData["time_utc"]}`);

//Inputs Received Data into the local db

        const sql = 'INSERT INTO AIS_Data(ShipId, ShipName, Latitude, Longnitude, Cog, Sog, RateOfTurn, TrueHeading, Timestamp) VALUES(?,?,?,?,?,?,?,?,?)';

        db.run(sql,[positionReport["UserID"], metaData["ShipName"], positionReport['Latitude'], positionReport['Longitude'], positionReport['Cog'], 
                    positionReport['Sog'], positionReport['RateOfTurn'], positionReport['TrueHeading'], metaData["time_utc"]],
            (err)=> {
                if (err) return console.error(err.message);

                console.log("A new row has been created");
            })
        }
    };