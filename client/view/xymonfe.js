Template.xymonfe.helpers({
  host: function() {
    console.log("host");
    return xymon.get('xymon::*::test');
  },

  test: function() {
    console.log("test");
    return xymon.get('xymon::*::color');
  }
});
