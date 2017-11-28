myApp.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'public/views/main.html',
    //controller  : 'mainController'
  })
});   