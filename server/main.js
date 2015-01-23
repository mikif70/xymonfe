Meteor.publish("mail", function() {
  return xymon.matching("xymon::*");
});
