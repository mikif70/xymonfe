Services = new Mongo.Collection("services");

Dbs = {};

var srv = Services.find().fetch();
srv.forEach(function(s) {
  console.log("Add Collections ", s.name);
  Dbs[s.name] = new Mongo.Collection(s.name);
});
