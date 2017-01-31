var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Please enter a name!"], minlength:2},
  _appointments: [{type: mongoose.Schema.Types.ObjectId, ref:"Appointment"}]
}, {timestamps: true})

var AppointmentSchema = new mongoose.Schema({
  date: {type: Date, required:true},
  time: {type: Date,required: true },
  complain: {type: String, required: [true, "Please enter a valid complaint"], minlength:10},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})

var User = mongoose.model('User', UserSchema);
var Appointment = mongoose.model('Appointment', AppointmentSchema);
