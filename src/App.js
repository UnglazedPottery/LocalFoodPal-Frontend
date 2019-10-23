import 'bootstrap/dist/css/bootstrap.css';

import {Jumbotron} from 'reactstrap';


import React, { Component } from "react";
import "./App.css";
import DirectoryPage from "./components/DirectoryPage";
import DetailCard from "./components/DetailCard";
import ReviewForm from "./components/ReviewForm";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

class App extends Component {

  state = {
    currentPage: 'directory-page',
    id: 0,
    marketName: ""
  }

  switchPage = (page, id, name) => {
    this.setState({
      currentPage: page,
      id: id,
      marketName: name
    })
  }

  render() {
    let CurrentPage;
    if (this.state.currentPage === 'directory-page') {
      CurrentPage = <DirectoryPage switchPage={this.switchPage} markets={this.state.markets}/>
    }
    if (this.state.currentPage === 'login') {
      CurrentPage = <LoginPage switchPage={this.switchPage}/>
    }
    if (this.state.currentPage === 'signup') {
      CurrentPage = <SignupPage switchPage={this.switchPage}/>
    }
    if (this.state.currentPage === 'show') {
      CurrentPage = <DetailCard switchPage={this.switchPage} id={this.state.id} name={this.state.marketName}/>
    }
    if (this.state.currentPage === 'write-review') {
      CurrentPage = <ReviewForm switchPage={this.switchPage} name={this.state.marketName}/>
    }
    return (
      <div >
        
        <div className="center">LocalFood Pal</div>
        <div className="right">
          <button onClick={()=>this.props.switchPage("login")}>Login</button>
          <button onClick={()=>this.props.switchPage("signup")}>Create Account</button>
        </div>
        {CurrentPage}
      </div>
    )
  }
}

export default App;
