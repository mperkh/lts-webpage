FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Test'});
  }
})

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

// handling /admin route
adminRoutes.route('/lessons', {
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'Lessons'});
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /admin trigger');
  }]
});
