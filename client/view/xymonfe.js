Template.xymonfe.helpers({
  hostname: function(key) {
    retval = key.split("::");
    $("#vlabel_"+retval[2]).css("background-color", retval[4]);
    return retval[2]
  },

  info: function(key) {
    console.log(retval[3], retval[4]);
    return retval[3]
  },

  xymon: function() {
    var retval =  xymon.matching('xymon::*').fetch();
    console.log(retval);
    return retval;
  }
});
