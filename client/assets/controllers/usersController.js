app.controller('usersController', ['$scope', '$location', 'usersFactory', function($scope, $location, usersFactory) {

  $scope.login = function(){
      usersFactory.login($scope.user, function(data){
        if(data === null){
          usersFactory.create($scope.user, function(data){
            if(data.errors){
              $scope.errors = data.errors
            }else{
              $location.url('/dashboard')
            }
          })
        }else{
          $location.url('/dashboard')
        }
      })
    }
}]);
