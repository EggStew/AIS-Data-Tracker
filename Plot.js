d3.csv('REM Supplier.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });}

    var data = [];
    var ShipId = unpack(rows, 'ShipId');
    var Longitude = unpack(rows, 'Longnitude');
    var Latitude = unpack(rows, 'Latitude');

    for ( var i = 1 ; i < ShipId.length; i++ ) {
        var result = {
            type: 'scattergeo',
            location: 'united kingdom',
            locationmode: 'country names',
            lon: [ Longitude[i] , Longitude[i - 1] ],
            lat: [ Latitude[i] , Latitude[i - 1] ],
            mode: 'lines',
            line: {
                width: 2,
                color: 'red'
            },
        };

        data.push(result);
    };

    var layout = {
        title: 'Fri. Jan. 13 2023 Aberdeen Harbour',
        showlegend: false,
        geo: {
            resolution: 50,
            showland: true,
            landcolor: 'rgb(204, 204, 204)',
            countrycolor: 'rgb(204, 204, 204)',
            projection: {
              type: 'azimuthal equal area'
            },
            coastlinewidth: 1,
            lataxis: {
              range: [ 56, 58 ],
              tickmode: 'linear',
              dtick: 10
            },
            lonaxis:{
              range: [-5, 0],
              tickmode: 'linear',
              dtick: 20
            }
          }
      };

    Plotly.newPlot("myDiv", data, layout, {showLink: false});

});