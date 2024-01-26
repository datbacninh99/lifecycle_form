import React, { Component } from 'react';

class ControlledForm extends Component {
    constructor() {
        super();
        this.state = {
            studentId: "",
            birthDate: "",
            sex: "false",
            class: ""
        };
    }

    handleSubmit = (e) => {
        console.log("State:", this.state);
        e.preventDefault();
    }

    handleChange = (event) => {
        let name = event.target.name; // studentId
        let value = event.target.value; // value
        this.setState({
            [name]: value //['studentId']: value
        });
    }

    render() {
        return (
            <div>
                <h2>Controlled Form</h2>
                <form onSubmit={this.handleSubmit}>
                    StudentId: <input type="text" name="studentId" onChange={this.handleChange} /><br />
                    BirthDate: <input type={"date"} name="birthDate" onChange={this.handleChange} /><br />
                    Sex: <input type={"radio"} name="sex" id="male" value={true} onChange={this.handleChange} /><label htmlFor="male">Male</label><br />
                    <input type={"radio"} name="sex" id="female" value={false} onChange={this.handleChange} /><label htmlFor="female">Female</label><br />
                    Class: <select onChange={this.handleChange}>
                        <option>Chọn lớp</option>
                        <option>D15CNPM1</option>
                        <option>D15CNPM2</option>
                        <option>D15CNPM3</option>
                    </select>
                    <input type={"submit"} value="Submit" />
                </form>
            </div>
        );
    }
}

export default ControlledForm;