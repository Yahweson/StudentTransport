const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({

    campus:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    slot:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    today:{
        type:String,
        trim:true,
        minlength:3
        
    },
    patientId:{
        type:String,
        trim:true,
        minlength:3
    }

}, {
    timestamps:true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;