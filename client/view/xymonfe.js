Template.xymonfe.helpers({

  xymon: function() {
    var dbq =  xymon.matching('xymon::*').fetch();
    var i = 0;
    dbq.forEach(function(d) {
//      d["index"] = i;
      sp = d["key"].split("::");
      d["service"] = sp[1];
      d["host"] = sp[2];
      d["test"] = sp[3];
      vl = d["value"].split("::");
      d["color"] = vl[0];
      d["val"] = vl[1];
      console.log(d);
      i++;
    });
    console.log(dbq);
    return dbq;
  }
});
