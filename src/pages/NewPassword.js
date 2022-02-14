import React, { Component } from "react";
import "./../App.css";

function NewPassword() {
    return (
      <div className="formCenter">
        <form className="formFields">
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
        </form>
      </div>
    );
}
export default NewPassword;