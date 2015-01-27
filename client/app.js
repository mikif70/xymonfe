Tracker.autorun(function () {
  Meteor.subscribe('services');
  console.log("services subscribed ");
});

  var srv = Services.find().fetch();
  srv.forEach(function(s) {
    console.log("Subscribe ", s.name);
    Meteor.subscribe(s.name);
  });
