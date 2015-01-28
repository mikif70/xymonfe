Meteor.publish("services", function() {
  return Services.find();
});

Meteor.publish("tests", function() {
  return Tests.find();
});
