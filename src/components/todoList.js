import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";


class ToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  check = (e) => {
    if (e.target.checked === true) {
      this.setState({
        checked: true
      })
    } else {
      this.setState({
        checked: false
      })
    }
  }

  render() {
    return (
      <div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h5 className="text-center ">Marking Campaign</h5>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div class="card todo-card">
              <div class="card-header">
                <div className="row justify-content-between">
                  <div className="col-auto mt-3">
                    <span type="button" class="btn btn-primary"> Add Task </span>
                  </div>
                  <div className="col-auto mt-4">
                    <div className="row">
                      <div className="col-auto">
                        <p className="text"> Priority </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div className="row justify-content-between">
                  <div className="col-md-12 mt-3">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><input type="checkbox" id="CheckBox" onClick={this.check.bind(this)} className="check mb-3"></input>Campaign creative concepts<p className=" float-right horizontal-line med text-center"> Med </p></li> 
                      <li class="list-group-item"><input type="checkbox" id="CheckBox" onClick={this.check.bind(this)} className="check mb-3"></input>Campaign Messaging<p className=" float-right horizontal-line high text-center"> High </p></li>
                      <li class="list-group-item"><input type="checkbox" id="CheckBox" onClick={this.check.bind(this)} className="check mb-3"></input>Select agency<p className=" float-right horizontal-line med text-center"> Med </p></li>
                      <li class="list-group-item"><input type="checkbox" id="CheckBox" onClick={this.check.bind(this)} className="check mb-3"></input>Media Plan<p className=" float-right horizontal-line low text-center"> Low </p></li>
                      <li class="list-group-item"><input type="checkbox" id="CheckBox" onClick={this.check.bind(this)} className="check mb-3"></input>Customer stories finalized<p className=" float-right horizontal-line high text-center"> High </p></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default ToDoList;
