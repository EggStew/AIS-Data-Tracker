const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./data.db", sqlite3.OPEN_READWRITE, (err)=>{
  if (err) return console.error(err.message);

  console.log("Connection Successful");
});

// db.run(
//  'CREATE TABLE AIS_Data(ShipId, ShipName, Latitude, Longnitude, Cog, Sog, RateOfTurn, TrueHeading, Timestamp)'
//);

const sql = 'INSERT INTO AIS_Data(ShipId, ShipName, Latitude, Longnitude, Cog, Sog, RateOfTurn, TrueHeading, Timestamp) VALUES(?,?,?,?,?,?,?,?,?)';

db.run(sql,['235094286, GRAMPIAN DEFIANCE, 57.18426, -2.0442216666666666, 175, 275.3, 0.2, 127'],
(err)=> {
  if (err) return console.error(err.message);

  console.log("A new row has been created");
})

db.close((err)=>{
  if (err) return console.error(err.message);
})
