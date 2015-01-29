var now = new ReactiveVar(new Date() / 1000);
var interval = Meteor.setInterval(function () {
  console.log("Old Time: ", now.get());
  now.set(new Date().getTime() / 1000);
//  console.log("New Time: ", now.get());
}, 60000);

Template.xymonfe.destroyed = function() {
  Meteor.clearInterval(interval);
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
  Slides: function() {
    var servs = getServices();

    console.log("SLIDES: ",servs);

    if (servs === null) {
      return servs
    } else {
      return {services: servs};
    }
  },

  Slide: function(services) {
    console.log("Slide: ",services);

    return services;
  },

  Pills: function(services) {
    console.log("Pills: ",services);

    return services;
  },

  Status: function(name) {

    if (Tests.findOne({ service: name, status: "red"}) !== undefined) {
      console.log("RED");
      $("#pill_"+name).addClass("red-pills");
      $("#pill_"+name).removeClass("yellow-pills");
      $("#pill_"+name).removeClass("green-pills");
    } else if ( Tests.findOne({ service: name, status: "yellow"}) !== undefined ) {
      console.log("YELLOW");
      $("#pill_"+name).addClass("yellow-pills");
      $("#pill_"+name).removeClass("red-pills");
      $("#pill_"+name).removeClass("green-pills");
    } else {
      console.log("GREEN");
      $("#pill_"+name).addClass("green-pills");
      $("#pill_"+name).removeClass("red-pills");
      $("#pill_"+name).removeClass("yellow-pills");

    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  },

  Item: function(name) {
    var tests = Tests.find({ service: name, status: {$ne: "green" }}, { sort: { timestamp: -1}, limit: 9});
//    console.log("Item: ",name);
//    if (tests.count() == 0 ) {
//      $("#pill_"+name).addClass("green"); //.css("color", "green !important");
//      $("#name_"+name).addClass("green"); //css("color", "green !important");
//    }
    return tests
  }

});

Template.box.helpers({
  Host: function(host) {
    return host.replace(".tiscali.sys", "");
  },

  Color: function(color, service) {

//    $("#pill_"+service).css("color", color);
//    $("#name_"+service).css("color", color);

    return color;
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
