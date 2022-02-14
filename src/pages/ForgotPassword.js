import React, { Component } from "react";
import { Typography } from "@material-ui/core";

function ForgotPassword() {
    return (
      
      <div className="formCenter">
        <h1>Forgot your Password?</h1>
        <h3>No worries! Enter your e-mail and we will send you a reset.</h3>
        <form className="formFields">
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
          <button className="formFieldButton">Submit</button>{" "}
        </form>
      </div>
    );
}

export default ForgotPassword;
