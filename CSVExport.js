const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("AISData.csv");

const AISData = [{
    ShipId: "244170080",
    ShipName: "VOS PATRIOT",
    Latitude: "57.179535",
    Longnitude: "-2.041735"
},
{
    ShipId: "259504000",
    ShipName: "SAR ODIN Latitude",
    Latitude: "57.142320000000005",
    Longnitude: "-2.079823333333333"
},
{
    ShipId: "257638000",
    ShipName: "REM COMMANDER",
    Latitude: "57.14405166666666",
    Longnitude: "-2.062395"
},
{
    ShipId: "210151000",
    ShipName: "FS CRATHES",
    Latitude: "57.19141166666667",
    Longnitude: "-2.0181983333333333"
}
];

    fastcsv
    .write( AISData, { headers: true})
    .on('finish', function () {
        console.log('CSV File with the AIS data created succesfully!');
    })
    .pipe(ws)