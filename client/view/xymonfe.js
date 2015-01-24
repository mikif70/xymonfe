Template.xymonfe.helpers({
  hostname: function(key) {
    retval = key.split("::");
    return retval[2]
  },

  service: function(key) {
    var retval = key.split("::");
    return retval[1];
  },

  info: function(key) {
    var retval = key.split("::");
    console.log(retval[3]);
    return retval[3]
  },

  val: function(key, value) {
    var retval = value.split("::");
    console.log(retval[0], retval[1]);
    $("#label_"+key).css("background-color", retval[0]);
    return retval[1];
  },

  xymon: function() {
    var retval = []
    var dbq =  xymon.matching('xymon::*').fetch();
    var i = 0;
    dbq.forEach(function(d) {
      d["index"] = i;
      console.log(d);
      i++;
    });
    console.log(dbq);
    return dbq;
  }
});
