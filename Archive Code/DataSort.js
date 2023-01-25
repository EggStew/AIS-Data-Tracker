const fs = require("fs");
const { parse } = require("csv-parse");

const fastcsv = require("fast-csv");
const ws = fs.createWriteStream("SortAISData.csv");


const data = [];
const sortData = [{
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

fs.createReadStream("Archive Data\\AISData 13012023 - 1158-1258.csv")
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function (row) {
    // 👇 push the object row into the array
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    // 👇 log the result array
    console.log("parsed csv data:");
    console.log(data);
  });

function sort(){
    //forEach method to conver lat and long to array
    data.forEach(Latitude => 
      Latitude = Latitude.split(' ')
    );

    data.forEach(Longnitude =>
      Longnitude = Longnitude.split(' ')
    );

  for (let i = 1; i < data.length; i++){
    // check if object already exists in the array
    if(sortData.indexOf(data[i].ShipId) !== -1) {
    //push the lat / lon at i into the existing object in sortedData
    sortData[sortData.indexOf(data[i].ShipId)].Latitude.push(data[i].Latitude)
    sortData[sortData.indexOf(data[i].ShipId)].Longnitude.push(data[i].Longnitude)
    }else {
    sortData.push(data[i]);
    }
  }
  console.log("sorted data:");
  console.log(sortData)
}


function update(){
    fastcsv
    .write( sortData, { headers: true})
    .on('finish', function () {
        console.log('CSV File with the AIS data created succesfully!');
    })
    .pipe(ws);}


    
function exitfun(){
  process.exit()}


const updateSort = setInterval(sort, 10000);
const updateInter = setInterval(update, 20000);
const exitfunc = setInterval(exitfun, 30000);