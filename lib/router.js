Router.configure({
  loadingTemplate: 'loading',
});

Router.route('/', function () {
  this.render('xymonfe');
});

Router.onBeforeAction("loading");
