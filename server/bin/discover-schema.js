var path = require('path');

//var app = require(path.resolve(__dirname, '../server/server'));
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');
var fs = require('fs');
var ds = app.datasources.pruebasDS;

ds.discoverSchema('clientes', {schema: 'pruebas'}, function(err, schema) {
  if (err) throw err;

  if (schema) {
    console.log("Auto discovery success: " + schema.name);
    var json = JSON.stringify(schema, null, '  ');
    console.log(json);
    
    var outputName = outputPath + '/' +schema.name + '.json';
    fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputName);
      }
    });
  }

  ds.disconnect();
});