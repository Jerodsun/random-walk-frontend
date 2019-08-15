import React, { Component } from 'react';
import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api2' // change for prod to env var?

// process.env.ENV_VARIABLE

export default class TablePOST extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users) // delete in production
    }).catch((error) => { console.log(error) })
  }

  render() {

    // if (this.state.users.length === 0) {
    //   return (
    //     <div className="card">
    //       <div className="card-body">
    //         <h5 className="card-title">Failure! This is probably a backend problem.</h5>
    //         <h6 className="card-subtitle mb-2 text-muted">
    //         </h6>
    //       </div>
    //     </div>
    //   )
    // }
    
    return (
      <div className="container">
      <div className="col-xs-8">
      <h1>React Axios Example</h1>

      {/* Why can't I put the conditional here? */}

      {this.state.users.map((value, index) => {
        return (
        <div className="card" key={index}> {/* add a key to each child as well as each element inside children. */}
          <div className="card-body">
            <h5 className="card-title">User # <p key={index}>{value}</p></h5>
            <h6 className="card-subtitle mb-2 text-muted">
            </h6>
          </div>
        </div>
      )})}

      </div>
     </div>
    );
  }
}