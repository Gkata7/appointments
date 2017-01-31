app.factory("appointmentsFactory",["$http", function($http){
  var factory = {};
  var appointments = [];
  var appointment = {};

  factory.index = function(callback){
    $http.get("/dashboard").then(function(returned_data){
      appointments = returned_data.data
      callback(appointments)
    })
  };
  factory.create = function(newappointments, user, callback){
    $http.post("/appointments/" + user, newappointments).then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data.data)
      }
    });
  };
  factory.delete = function(user,callback){
    $http.delete('/complain/' + user).then(function(returned_data){
      appointments = returned_data.data;
      callback();
    })
  }
  return factory
}])
