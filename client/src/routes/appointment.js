const router = require('express').Router();

let Appointment = require('../models/appointmet.model');



router.route('/').get((req, res) => {
    var stateDate = new Date();
    var iets = [{}];

    Appointment.find()
        .then(appointments => {

            var filteredDate = appointments.filter((appDate) => {
                // var stateDate = this.state.today;

                var see = appDate.today;

                // console.log(see);
                var blu = new Date(see);

                var cru = stateDate.getDate();

                var day = blu.getDate();


                if (cru === day) {
                    return appDate;
                }
            });

            res.json(filteredDate);

        })
        .catch(err => res.json(400).json('Error' + err));
});

/*
router.route('/').get((req, res) => {
  
    Appointment.find()   
        .then(appointments => res.json(appointments))
        .catch(err => res.status(400).json('Error: ' + err));
});*/

router.route('/add').post((req, res) => {


    const campus = req.body.campus;
    const slot = req.body.slot;
    const today = req.body.today;
    const patientId = req.body.patientId;

    //make not double book with slot in one day
    var stateDate = new Date();

    const newAppointment = new Appointment({
        campus,
        slot,
        today,
        patientId,
    });

    //console.log(newAppointment);


    Appointment.find()
        .then(appointments => {

            var filteredDate = appointments.filter((appDate) => {
                // var stateDate = this.state.today;

                var see = appDate.today;

                // console.log(see);
                var blu = new Date(see);

                var cru = stateDate.getDate();

                var day = blu.getDate();


                if (cru === day) {
                    return appDate;
                }
            });

           /* var well = filteredDate.forEach((item) => {
                if (item._id === patientId && item.slot === slot) { 
                    console.log("Aowa");
                }
            });
            console.log(well);
            */

            var filteresSlot = filteredDate.some((appSlot) => {
             //   console.log(appSlot._id);

                return slot === appSlot.slot && patientId === appSlot.patientId;

            });
            // res.json(filteredDate);
            console.log(filteresSlot);

            if (filteresSlot === false) {
               // console.log('Add Now');
                newAppointment.save()
                    .then(() => res.json('Appointment Added'))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
        })
        .catch(err => res.json(400).json('Error' + err));


    /*    newAppointment.save()
            .then(() => res.json('Appointment Added'))
            .catch(err => res.status(400).json('Error: ' + err));*/

});

router.route('/:id').get((req, res) => {
    Appointment.findById(req.params.id)
        .then(appointment => res.json(appointment))
        .catch(err => res.status(400).json(appointment));
});

router.route('/remove/:id').delete((req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Appointment deleted'))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
    console.log(req.params);
    Appointment.findById(req.params.id)
        .then(appointment => {

            if (req.body.campus == "") { appointment.campus = appointment.campus } else { appointment.campus = req.body.campus };
            if (req.body.slot == "") { appointment.slot = appointment.slot } else { appointment.slot = req.body.slot };
            if (req.body.today == "") { appointment.today = appointment.today } else { appointment.today = req.body.today };

            appointment.save()
                .then(() => res.json('Appointment updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;