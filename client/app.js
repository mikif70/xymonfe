Tracker.autorun(function () {
  Meteor.subscribe('services');
  Meteor.subscribe('tests');
//  console.log("services subscribed ");
});

UI.registerHelper('getServices', function () {
    return isMobile();
});
