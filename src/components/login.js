import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, InputAdornment } from "@material-ui/core";
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import { withRouter } from "react-router-dom";
import {login} from "../redux/userSlice"
class signUpLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      email: "",
      password: "",
    };
  }



  componentDidMount(){
    console.log(this.props.AllPosts)
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   // const dispatch = useDispatch();
  //   dispatch(
  //     login({
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //   )
  // }

  signUpLogin = () => {
    let url = "/todo"
    const { history } = this.props;
    history.push(url);
};

  handleClickEye = () => {
    const oldClassName = document.getElementById("eye").className;
    const newClassName = oldClassName === "fa fa-eye passwordEye" ? "fa fa-eye-slash passwordEye" : "fa fa-eye passwordEye";
    document.getElementById("eye").className = newClassName;
    const oldType = document.getElementById("PassEye").type;
    const newType = oldType === "password" ? "text" : "password";
    document.getElementById("PassEye").type = newType;
  };

  render() {
    return (
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <p className="errors">{this.state.errorMessage}</p>
            </div>
            <div className="col-sm-4"></div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row pt-4">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <TextField
                  fullWidth
                  type="text"
                  className="TextField"
                  label="Enter Your Email"
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <TextField
                  id="PassEye"
                  fullWidth
                  type="password"
                  className="TextField"
                  label="Enter Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {<i
                          id="eye"
                          onClick={this.handleClickEye.bind(this)}
                          className="fa fa-eye-slash passwordEye"
                          aria-hidden="true"
                        ></i>}
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <button
                  type="submit"
                  className="continue createBtn" onClick={this.signUpLogin.bind(this)}>
                  <span className="dd">Sign In</span>
                </button>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </form>
          <div className="row mt-5"></div>
          <div className="row mt-4">
            <p className="d-flex justify-content-center m-auto">
              Don’t have an account ?
              <a className="ml-1" href="#">
                Sign Up
              </a>
            </p>
          </div>

          <div className="row mt-4">
            <p className="d-flex justify-content-center m-auto">
              Forgot password ?
              <a className="ml-1" href="#"> 
                Forgot password
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(signUpLogin);
