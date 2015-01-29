var now = new ReactiveVar(new Date() / 1000);
var interval = Meteor.setInterval(function () {
  console.log("Old Time: ", now.get());
  now.set(new Date().getTime() / 1000);
//  console.log("New Time: ", now.get());
}, 60000);

getServices = function() {
  var servs = Services.find().fetch();

  if (servs.length <= 0) {
     return null;
  }

  var ind = 0;
  servs.forEach(function(s) {
    s['id'] = ind;
    if (ind === 0) {
      s['class'] = "active";
    } else {
      s['class'] = "";
    }
    s['Name'] = s['name'].charAt(0).toUpperCase() + s['name'].slice(1);
    if (Tests.findOne({ service: s['name'], status: "red"}) !== undefined) {
      s['color'] = "red";
    } else if ( Tests.findOne({ service:  s['name'], status: "yellow"}) !== undefined ) {
      s['color'] = "yellow";
    } else {
      s['color'] = "green";
    }

    ind++;
  });

  return servs;
}

Template.xymonfe.destroyed = function() {
  Meteor.clearInterval(interval);
  Meteor.clearInterval(rotate);
};

Template.xymonfe.rendered = function() {

  $('#xymonCarousel').carousel({
    keyboard: false,
    pause: "none",
    interval: 6000
  });

  $('#xymonCarousel').on('slide.bs.carousel', function(ev) {
    var slideFrom = $(this).find('.active')[0].id.split("_")[1];
    var slideTo = ev.relatedTarget.id.split("_")[1];
    $("#pill_"+slideTo).addClass("active");
    $("#pill_"+slideFrom).removeClass("active");
  });

}

Template.xymonfe.helpers({
  Slide: function() {
    return getServices();
  },

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
  }

});

Template.box.helpers({
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
