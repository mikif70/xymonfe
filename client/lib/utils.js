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
      console.log("RED");
      s['color'] = "red";
    } else if ( Tests.findOne({ service:  s['name'], status: "yellow"}) !== undefined ) {
      console.log("YELLOW");
      s['color'] = "yellow";
    } else {
      console.log("GREEN");
      s['color'] = "green";
    }

    ind++;
  });

  return servs;
}
