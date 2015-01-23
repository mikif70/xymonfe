Meteor.publish("xymon", function() {
  return xymon.matching("xymon::*");
});
