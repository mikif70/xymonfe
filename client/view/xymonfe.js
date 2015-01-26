var objects = [];

Template.xymonfe.helpers({

  Xymon: function() {
    objects =  xymon.matching('xymon::*').fetch();
    var ind = 0;
    objects.forEach(function(d) {
      sp = d["key"].split("::");
      d["service"] = sp[1];
      d["host"] = sp[2].replace(".tiscali.sys", "");
      d["test"] = sp[3];
      delete d['key'];
      vl = d["value"].split("::");
      d["color"] = vl[0];
      d["timestamp"] = vl[1];
      delete d['value'];
      d["index"] = ind;
      ind++;
    });
//    console.log("Xymon: ",objects);
    return objects;
  },

  NewServices: function(val) {
    var retval = [];
    val.forEach(function(v) {
      if (retval.indexOf(v["service"]) < 0 ) {
        retval.push(v["service"]);
      }
    });
//    console.log("NewService: ", retval);
    return retval;
  },

  NewHosts: function(val) {
    var retval = []
    objects.forEach( function(o) {
      if (o["service"] === val) {
        retval.push(o);
      }
    });
    return retval;
  }
});
