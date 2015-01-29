var now = new ReactiveVar(new Date() / 1000);
var interval = Meteor.setInterval(function () {
  now.set(new Date().getTime() / 1000);
}, 60000);

Template.xymonfe.destroyed = function() {
  Meteor.clearInterval(interval);
};

Template.xymonfe.rendered = function() {
  $(document).ready(function() {
    $('#xymonCarousel').carousel({
      keyboard: false,
      pause: "none",
      interval: 1000,
      cycle: true
    });

    $('#xymonCarousel').on('slide.bs.carousel', function(ev) {
      var slideFrom = $(this).find('.active')[0].id.split("_")[1];
      var slideTo = ev.relatedTarget.id.split("_")[1];
      $("#pill_"+slideTo).addClass("active");
      $("#pill_"+slideFrom).removeClass("active");
    });

  });
}

Template.xymonfe.helpers({
  Slides: function() {
    var servs = getServices();

    if (servs === null) {
      return servs
    } else {
      return {services: servs};
    }
  },

  Item: function(name) {
    var tests = Tests.find({ service: name, status: {$ne: "green" }}, { sort: { timestamp: -1}, limit: 9});

    return tests
  },

  Host: function(host) {
    return host.replace(".tiscali.sys", "");
  },

  Time: function(time) {
    var retval;
    var diff = Math.round(now.get() - time);
    if (diff < 60 ) {
      retval = diff+" sec";
    } else if ( diff > 60 && diff < 3600 ) {
      retval = Math.round(diff/60) + " min";
    } else {
      retval = Math.round(diff/3600) + " hour";
    }
    return retval;

  }
});
