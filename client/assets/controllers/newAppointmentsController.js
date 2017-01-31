app.controller('newAppointmentsController', ['$scope', '$location', 'usersFactory','appointmentsFactory', function($scope, $location, usersFactory,appointmentsFactory) {
        var getCurrentUser = function(){
          usersFactory.getCurrentUser(function(returned_data){
            $scope.user = returned_data;
          });
        }
  getCurrentUser();

  $scope.create = function(){
    appointmentsFactory.create($scope.appointment,$scope.user._id, function(data){
      if(data.errors) {
        $scope.errors = data.errors;
      }else{
        $location.url('/dashboard');
      }
    })
  }
}]);
