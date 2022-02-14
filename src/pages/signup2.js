import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import departments from "./assets/departments";
import years from "./assets/years";
import colleges from "./assets/colleges";

function SignUp2 () {
  const [dept,setDept] = useState('');
  const [year, setYear] = useState('')
  const [college, setCollege] = useState('')
  const customStyles = {
    control: (base, state) => ({
      ...base,
      color: "#35858B",
      background: "cream",    //bg color change here
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue"
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      color: "#35858B",
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      color: "#35858B",
      // kill the white space on first and last option
      padding: 0
    }),
    
  };
  const handleDeptChange = (selectedOption) => {
    setDept(selectedOption)
  }
  const handleCollegeChange = (selectedOption) => {
    setCollege(selectedOption);
  }

  const handleYearChange = (selectedOption) => {
    setYear(selectedOption.value);
  }
    return (
        <div className="formCenter">
        <form className="formFields">
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
            />
          </div>
          {/*email*/}
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
            />
          </div>
          
          {/*college*/}
          <div className="formField">
            <label className="formFieldLabel" htmlFor="colg">
              College
            </label>
            <Select className="drop" styles={customStyles} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={colleges.map(opt => ({ label: opt, value: opt }))}
            onChange={handleCollegeChange} 
            placeholder="College" />
          </div>

          {/*department*/}
          <div className="formField">
            <label className="formFieldLabel" htmlFor="dept">
              Department
            </label>
            <Select className="drop" styles={customStyles} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={departments.map(opt => ({ label: opt, value: opt }))} 
            value={dept}
            onChange={handleDeptChange}
            placeholder="Department" />
          </div>

          {/*year*/}
          <div className="formField">
            <label className="formFieldLabel" htmlFor="year">
              Year
            </label>
            <Select className="drop"  styles={customStyles} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            options={years.map(opt => ({ label: opt, value: opt }))}
            onChange={handleYearChange} 
            placeholder="Year" />
          </div>
          {/*Password*/}
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
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            </div>
            <div className="formField">
            <Link to="/sign-in" className="formFieldLink">
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
export default SignUp2;
