Meteor.publish("indoona", function() {
  return Indoona.find();
});

Meteor.publish("streamago", function() {
  return Streamago.find();
});

Meteor.publish("mailaccess", function() {
  return Mailaccess.find();
});

Meteor.publish("web-area", function() {
  return WebArea.find();
});

Meteor.publish("vas-area", function() {
  return VasArea.find();
});

Meteor.publish("services", function() {
  return Services.find();
});


Meteor.methods({

});
