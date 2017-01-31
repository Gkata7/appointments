var mongoose = require("mongoose");
var Appointment = mongoose.model("Appointment");
var User = mongoose.model("User");
module.exports = {

  show: function(req, res){
    Appointment.find({}).populate("_user").exec(function(err, appointment){
      if (err){
        res.json(err)
      }else {
        res.json(appointment)
      }
    })
  },
  create: function(req,res){
    User.findOne({_id: req.params.id}, function(err, user){
      var appointment = new Appointment(req.body)
      appointment._user = req.params.id;
      user._appointments.push(appointment);
      appointment.save(function(err){
        user.save(function(err){
          if (err){
            res.json(err);
          }else{
            res.json(user);
          }
        })
      })
    })
  },
  delete: function(req,res){
    Appointment.remove({_id: req.params.id}, function(err,response){
      if (err) {
      }else{
        res.json(response);
      }
    })
  },


}
