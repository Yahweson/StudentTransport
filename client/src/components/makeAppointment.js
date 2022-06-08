import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

export default class MakeAppointment extends Component {
    constructor(props) {
        super(props);

        this.onChangeSymptoms = this.onChangeSymptoms.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            today: new Date(),
            patientId: "",
            campus: "",
            slot: "",
            patients: [],
            words:[]
        }
    }

    conmponentDidMount() {
        axios.get('http://localhost:5000/appointment/')
            .then(response => {
                this.setState({patients: response.data});

                const tokens = localStorage.getItem('usertoken');
                const decoded = jwtDecode(tokens);

                const id = decoded._id;

                 const word = this.state.patients.filter(his => his.patientId === id);
                 console.log(word);
                 this.setState({words: word});
           })
           .catch((err) => {
               console.log(err);
             });





    }


    onChangeSymptoms(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        // console.log(this.state.words);

        const tokens = localStorage.getItem('usertoken');
        const decoded = jwtDecode(tokens);

        const appointment = {
            patientId: decoded._id,
            campus: this.state.campus,
            slot: this.state.slot,
            today: this.state.today,

        }

//        console.log(appointment);

        axios.post('http://localhost:5000/appointment/add', appointment)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div>
                <p>You are on the Make AppointMent Component</p>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="btn btn-xs btn-outline btn-outline-primary">
                            <Link to="/profile" className="nav-link">
                                back
                            </Link>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>

                    <label for="campus">Choose a Campus:</label>

                    <select name="campus" id="campus" onChange={this.onChangeSymptoms} value={this.state.campus}>

                        <option value="Arcadia-M">Arcadia -to- Main</option>
                        <option value="Arcadia-S">Arcadia -to- South</option>
                        <option value="Arcadia-N">Arcadia -to- North</option>

                        <option value="Main-A">Main -to- Arcadia</option>
                        <option value="Main-N">Main -to- North</option>
                        <option value="Main-S">Main -to- South</option>


                        <option value="South-M">South -to- Main</option>
                        <option value="South-A">South -to- Arcadia</option>
                        <option value="South-N">South -to- North</option>



                        <option value="North-A">North -to- Arcadia</option>
                        <option value="North-M">North -to- Main</option>
                        <option value="North-S">North -to- South</option>

                    </select>

                    <br />

                    <label for="slots">Choose a slot:</label>

                    <select name="slot" id="slot" onChange={this.onChangeSymptoms} value={this.state.slot}>
                        <option value="slot1 06:00-07:00">slot1 06:00-07:00</option>
                        <option value="slot2 07:00-08:00">slot2 07:00-08:00</option>
                        <option value="slot3 08:00-09:00">slot3 08:00-09:00</option>
                        <option value="slot4 09:00-10:00">slot4 09:00-10:00</option>
                        <option value="slot5 10:00-11:00">slot5 10:00-11:00</option>
                        <option value="slot6 11:00-12:00">slot6 11:00-12:00</option>
                        <option value="slot7 12:00-13:00">slot7 12:00-13:00</option>
                        <option value="slot8 13:00-14:00">slot8 13:00-14:00</option>
                        <option value="slot9 14:00-15:00">slot9 14:00-15:00</option>
                        <option value="slot10 15:00-16:00">slot10 15:00-16:00</option>
                        <option value="slot11 16:00-17:00">slot11 16:00-17:00</option>
                        <option value="slot12 17:00-18:00">slot12 17:00-18:00</option>
                        <option value="slot13 18:00-19:00">slot13 18:00-19:00</option>
                        <option value="slot14 19:00-20:00">slot14 19:00-20:00</option>
                    </select>

                    <button type="submit" className="btn btn-outline-success btn-block text-uppercase">
                        <i className="fas fa-sign-in-alt"></i> Book seating </button>
                </form>
            </div>
        )
    }

}


