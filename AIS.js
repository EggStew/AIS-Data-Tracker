const WebSocket = require('ws');
const socket = new WebSocket("wss://stream.aisstream.io/v0/stream")

socket.onopen = function (_) {
    let subscriptionMessage = {
        Apikey: "e9a3f1f1782d4b64598db7868b01702444187602",
        BoundingBoxes: [[[-180, -90], [180, 90]]]
    }
    socket.send(JSON.stringify(subscriptionMessage));
};

socket.onmessage = function (event) {
    let aisMessage = JSON.parse(event.data)
    if (aisMessage["MessageType"] === "PositionReport") {
        let positionReport = aisMessage["Message"]["PositionReport"]
        console.log(`ShipId: ${positionReport["UserID"]} Latitude: ${positionReport['Latitude']} Latitude: ${positionReport['Longitude']}`)
    }
};