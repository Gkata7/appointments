var path = require('path');
var users = require('./../controllers/users.js');
var appointments = require('./../controllers/appointments.js');

module.exports = function(app){
  app.post('/users', function(req,res){
    users.create(req, res);
  });
  app.post("/login", function(req,res){
    users.login(req, res);
  });
  app.get("/dashboard", function(req,res){
    appointments.show(req, res);
  });
  app.post("/appointments/:id", function(req,res){
    appointments.create(req,res)
  });
  app.delete("/complain/:id",function(req,res){
    appointments.delete(req,res)
  });

}
