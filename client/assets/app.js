var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partials/users.html",
    controller: "usersController"
  })
  .when("/dashboard", {
    templateUrl: "partials/dashboard.html",
    controller: "appointmentsController"
  })
  .when("/newAppointment", {
    templateUrl: "partials/appointment.html",
    controller: "newAppointmentsController"
  })
  .otherwise({
    redirectTo: "/"
  })
});
