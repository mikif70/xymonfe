var now = new ReactiveVar(new Date() / 1000);
var interval = Meteor.setInterval(function () {
  console.log("Old Time: ", now.get());
  now.set(new Date().getTime() / 1000);
  console.log("New Time: ", now.get());
}, 60000);
var totServices = 0;

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
  Slide: function() {
    var servs = Services.find().fetch();
    var ind = 0;
    servs.forEach(function(s) {
      s['id'] = ind;
      if (ind === 0) {
        s['class'] = "active";
      } else {
        s['class'] = "";
      }
      s['Name'] = s['name'].charAt(0).toUpperCase() + s['name'].slice(1);
      ind++;
    });

    totServices = ind-1;

    return servs;
  },

  Item: function(name) {
    var tests = Tests.find({ service: name, status: {$ne: "green" }}, { sort: { timestamp: -1}, limit: 9});
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
