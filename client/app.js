Tracker.autorun(function () {
    Session.setDefault('now', new Date());
    Meteor.subscribe('xymon', function() {
      console.log("xymon");
      var retval = xymon.matching('xymon::*');
      return retval;
    });
});
