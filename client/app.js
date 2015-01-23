Tracker.autorun(function () {
    Session.setDefault('now', new Date());
    Meteor.subscribe('mail', function() {
      console.log("mail");
      var retval = xymon.matching('xymon::*');
      console.log(retval);
      return retval;
    });
});
