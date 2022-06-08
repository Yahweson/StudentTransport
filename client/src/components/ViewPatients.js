import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Patient = props => (
    <tr>
        <td>{props.patient.campus}</td>
        <td>{props.patient.slot}</td>
        <td>{props.patient.email}</td>
        <td>
            <Link to={"/viewInfoDash" + props.patient._id}>
                Info
            </Link>
        </td>
        <td>
            <Link to={"/updatePatientDash" + props.patient._id}>edit</Link> | <a href="#" onClick={() => { props.deletePatient(props.patient._id) }}>delete</a>
        </td>
    </tr>
)

class Patients extends Component {
    constructor(props) {
        super();

        this.deletePatient = this.deletePatient.bind(this);

        this.state = {
            patients: [],
            mainA: 0,
            mainN: 0,
            mainS: 0,

            ArcadiaM: 0,
            ArcadiaN: 0,
            ArcadiaS: 0,

            northA: 0,
            northM: 0,
            northS: 0,

            southA: 0,
            southM: 0,
            southN: 0
        }
    }

    deletePatient(id) {
        axios.delete('/patients/remove/' + id)
            .then(res => console.log(res.data));

        this.setState({
            patients: this.state.patients.filter(el => el._id !== id)
        })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/appointment/')
            .then(response => {

                this.setState({ patients: response.data });

                //filter for MainA
                const mainToArcdia = this.state.patients.filter((item) => {
                    return item.campus == "Main-A";
                });

                //filter for MainN
                const mainToNorth = this.state.patients.filter((item) => {
                    return item.campus == "Main-N";
                });
                //filter for MainS
                const maintoSouth = this.state.patients.filter((item) => {
                    return item.campus == "Main-S";
                });

                //filter for ArcadiaM
                const acrToMain = this.state.patients.filter((item) => {
                    return item.campus == "Arcadia-M";
                });

                //filter for ArcadiaN
                const acrToNorth = this.state.patients.filter((item) => {
                    return item.campus == "Arcadia-N";
                });

                //filter for ArcadiaS
                const acrToSouth = this.state.patients.filter((item) => {
                    return item.campus == "Arcadia-S";
                });

                //filter for NorthA
                const northToArc = this.state.patients.filter((item) => {
                    return item.campus == "North-A";
                });

                //filter for NorthM
                const northToMain = this.state.patients.filter((item) => {
                    return item.campus == "North-M";
                });

                //filter for NorthS
                const northToSouth = this.state.patients.filter((item) => {
                    return item.campus == "North-S";
                });

                //filter for SouthA
                const southToArcadia = this.state.patients.filter((item) => {
                    return item.campus == "South-A";
                });

                //filter for SouthA
                const southToMain = this.state.patients.filter((item) => {
                    return item.campus == "South-M";
                });

                //filter for SouthN
                const southToNorth = this.state.patients.filter((item) => {
                    return item.campus == "South-N";
                });


                /* 
                    START OF MAIN 
                */


                //count for state mainA
                var countMa = 0;
                for (let index = 0; index < mainToArcdia.length; index++) {

                    const element = mainToArcdia[index];

                    countMa = countMa + 1;

                    this.setState({ mainA: countMa });
                    console.log(countMa);
                }

                //count for state mainS
                var countMs = 0;
                for (let index = 0; index < maintoSouth.length; index++) {

                    const element = maintoSouth[index];

                    countMs = countMs + 1;

                    this.setState({ mainS: countMs });
                    console.log(countMs);
                }

                //count for state mainN
                var countMn = 0;
                for (let index = 0; index < mainToNorth.length; index++) {

                    const element = mainToNorth[index];

                    countMn = countMn + 1;

                    this.setState({ mainN: countMn });
                    console.log(countMn);
                }

                /* 
                    START OF ARCADIA 
                */

                //count for state arcadiaM
                var countAm = 0;
                for (let index = 0; index < acrToMain.length; index++) {

                    const element = acrToMain[index];

                    countAm = countAm + 1;

                    this.setState({ ArcadiaM: countAm });
                    console.log(countAm);
                }

                //count for state arcadiaN
                var countAn = 0;
                for (let index = 0; index < acrToNorth.length; index++) {

                    const element = acrToNorth[index];

                    countAn = countAn + 1;

                    this.setState({ ArcadiaN: countAn });
                    console.log(countAn);
                }

                //count for state arcadiaS
                var countAs = 0;
                for (let index = 0; index < acrToSouth.length; index++) {

                    const element = acrToSouth[index];

                    countAs = countAs + 1;

                    this.setState({ ArcadiaS: countAs });
                    console.log(countAs);
                }

                /* 
    START OF NORTH 
*/
                //count for state NorthA
                var countNa = 0;
                for (let index = 0; index < northToArc.length; index++) {

                    const element = northToArc[index];

                    countNa = countNa + 1;

                    this.setState({ northA: countNa });
                    console.log(countNa);
                }

                //count for state NorthM
                var countNm = 0;
                for (let index = 0; index < northToMain.length; index++) {

                    const element = northToMain[index];

                    countNm = countNm + 1;

                    this.setState({ northM: countNm });
                    console.log(countNm);
                }


                //count for state NorthS
                var countNs = 0;
                for (let index = 0; index < northToSouth.length; index++) {

                    const element = northToSouth[index];

                    countNs = countNs + 1;

                    this.setState({ northS: countNs });
                    console.log(countNs);
                }

                /* 
START OF SOUTH 
*/
                //count for state SouthA
                var countSa = 0;
                for (let index = 0; index < southToArcadia.length; index++) {

                    const element = southToArcadia[index];

                    countSa = countSa + 1;

                    this.setState({ southA: countSa });
                    console.log(countSa);
                }

                //count for state SouthM
                var countSm = 0;
                for (let index = 0; index < southToMain.length; index++) {

                    const element = southToMain[index];

                    countSm = countSm + 1;

                    this.setState({ southM: countSm });
                    console.log(countSm);
                }

                //count for state SouthN
                var countSn = 0;
                for (let index = 0; index < southToNorth.length; index++) {

                    const element = southToNorth[index];

                    countSm = countSn + 1;

                    this.setState({ southN: countSn });
                    console.log(countSn);
                }

                console.log(maintoSouth);
                console.log(acrToNorth);


            })
            .catch((err) => {
                console.log(err);
            });


        /* const MainSouth = this.state.patients.filter((item) => {
            console.log(item.campus);
            return item.campus === "Main-S";
         });*/

        // const url ="http://localhost:5000/patients/";
        //const response = await fetch(url);
        //const data = await response.json();
        //this.setState({
        // patients: data.results[0]    
        // });    
    }

    patientList() {

        return this.state.patients.map(currentpatient => {
            return <Patient patient={currentpatient} deletePatient={this.deletePatient} key={currentpatient._id} />;
        })
    }



    render() {

        return (
            <div>
                <h2>Seats booked </h2>

                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="btn btn-xs btn-outline btn-outline-primary">
                            <Link to="/dash" className="nav-link">
                                back
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Main to South</h4>                                        
                   Number of seats booked: <h4>{this.state.mainS}</h4>
                   <br />
                </div>
                <div>
                    <h4>Main to Arc</h4>                    
                    
                    Number of seats booked:<h4>{this.state.mainA}</h4>
                    <br />
                </div>
                <div>
                    <h4>Main to North</h4>
                    
                    Number of seats booked:<h4>{this.state.mainN}</h4>
                    <br />
                </div>

                <div>
                    <h4>Arcadia to Main</h4>                    
                    
                    Number of seats booked:<h4>{this.state.ArcadiaM}</h4>
                    <br />
                </div>
                <div>
                    <h4>Arcadia to North</h4>                    
                    
                    Number of seats booked:<h4>{this.state.ArcadiaN}</h4>
                    <br />
                </div>
                <div>
                    <h4>Arcadia to South</h4>                    
                    
                    Number of seats booked:<h4>{this.state.ArcadiaS}</h4>
                    <br />
                </div>

                <div>
                    <h4> North to Arcadia</h4>                   
                    
                    Number of seats booked:<h4>{this.state.northA}</h4>
                    <br />
                </div>
                <div>
                    <h4>North to Main</h4>            
                    
                    Number of seats booked:<h4>{this.state.northM}</h4>
                    <br />
                </div>
                <div>
                    <h4>North to South</h4>                    
                    
                    Number of seats booked:<h4>{this.state.northS}</h4>
                    <br />
                </div>

                <div>
                    <h4>South to Arcadia</h4>                    
                    
                    Number of seats booked:<h4>{this.state.southA}</h4>
                    <br />
                </div>
                <div>
                    <h4>South to Main</h4>
                    
                    Number of seats booked:<h4>{this.state.southM}</h4>
                    <br />
                </div>
                <div>
                    <h4>South to North</h4>
                    
                    Number of seats booked:<h4>{this.state.southN}</h4> 
                    <br />
                </div>



            </div>
        );
    }

}

export default Patients;
