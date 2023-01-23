const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("AISData.csv");


    export function update(){
    fastcsv
    .write( AISData, { headers: true})
    .on('finish', function () {
        console.log('CSV File with the AIS data created succesfully!');
    })
    .pipe(ws)}

    update();