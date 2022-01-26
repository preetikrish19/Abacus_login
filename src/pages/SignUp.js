import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import departments from "./assets/departments";
import years from "./assets/years";
import colleges from "./assets/colleges";
class SignUpForm extends Component {
  
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      year: "",
      dept: "",
      colg: "",
      phone: "",
      conpass: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    const [dept, setdept] = useState(null);
    const handleDeptChange = (selectedOption) => {
      setdept(selectedOption);
    }
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          {/*name*/}
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          {/*year*/}
          <div className="formField">
            <label className="formFieldLabel" htmlFor="year">
              Year
            </label>
            <Select className="drop"  components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={years.map(opt => ({ label: opt, value: opt }))}
            onChange={this.handleChange} 
            placeholder="Year" />
          </div>

          {/*department*/}
          <div className="formField">
            <label className="formFieldLabel" htmlFor="dept">
              Department
            </label>
            <Select className="drop" components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={departments.map(opt => ({ label: opt, value: opt }))}
            onChange={handleDeptChange} 
            placeholder="Department" />
          </div>

            {/*college*/}
          <div className="formField">
            <label className="formFieldLabel" htmlFor="colg">
              College
            </label>
            <Select className="drop" components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={colleges.map(opt => ({ label: opt, value: opt }))}
            onChange={(e) => setdept(e.target.value)}
            value={dept}
            placeholder="College" />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
           {/*phone*/}
           <div className="formField">
            <label className="formFieldLabel" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              className="formFieldInput"
              placeholder="Enter your Phone Number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
           {/*confirm password*/}
           <div className="formField">
            <label className="formFieldLabel" htmlFor="conpass">
              Confirm Password
            </label>
            <input
              type="password"
              id="conpass"
              className="formFieldInput"
              placeholder="Confirm your password"
              name="conpass"
              value={this.state.conpass}
              onChange={this.handleChange}
            />
          </div>

          {/*<div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
            </div>
          */}

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            </div>
            <div className="formField">
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
