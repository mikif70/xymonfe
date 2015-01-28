var totServices = 0;

Template.xymonfe.rendered = function() {
  $('#xymonCarousel').carousel({
    keyboard: false,
    pause: "none",
    interval: 3000
  });

  $('#xymonCarousel').on('slide.bs.carousel', function(ev) {
    var item = ev.relatedTarget.id.split("_")[1];
    $("#pill_"+item).addClass("active");
    if ( ( item - 1) < 0 ) {
      $("#pill_"+totServices).removeClass("active");
    } else {
      $("#pill_"+(item-1)).removeClass("active");
    }
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
    var tests = Tests.find({ service: name }, { sort: { timestamp: -1}, limit: 9});
    return tests
  },

  Box: function(name) {
    console.log(name);
    return [{name: "1"},{name: "2"},{name: "3"},{name: "4"}]
  }

});

Template.box.helpers({
  Host: function(host) {
    return host.replace(".tiscali.sys", "");
  }
});
