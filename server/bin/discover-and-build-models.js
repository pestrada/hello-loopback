var path = require('path');

//var app = require(path.resolve(__dirname, '../server/server'));
var app = require(path.resolve(__dirname, '../server'));
var ds = app.datasources.pruebasDS;

ds.discoverAndBuildModels('clientes', {schema: 'pruebas'}, function(err, models) {
  if (err) throw err;

  models.clientes.find(function(err, accounts) {
    if (err) throw err;

    console.log('Found:', accounts);

    ds.disconnect();
  });
});