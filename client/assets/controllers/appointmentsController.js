app.controller('appointmentsController', ['$scope', '$location', 'usersFactory', 'appointmentsFactory', function($scope, $location, usersFactory, appointmentsFactory) {
  var index = function(){
    appointmentsFactory.index(function(returnedData){
      $scope.appointments = returnedData;
    });
  }
  index();

  $scope.create = function(){
    appointmentsFactory.create($scope.appointment, $scope.user._id,  function(data){
      if(data.errors){
        $scope.errors = data.errors;
      }else {
        index();
      }
    })
  }
  $scope.delete = function(id){
    appointmentsFactory.delete(id,index)
  }
}]);
