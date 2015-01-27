Meteor.publish("services", function() {
  return Services.find();
});

var srv = Services.find().fetch();
srv.forEach(function(s) {
  console.log("Publish ", s.name);
  Meteor.publish(s.name, function() {
    return Dbs[s.name].find();
  });
});
