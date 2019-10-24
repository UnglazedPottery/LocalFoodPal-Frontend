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
    marketName: "",
    user: null,
    user_id: null
  }

  switchPage = (page, id, name) => {
    this.setState({
      currentPage: page,
      id: id,
      marketName: name
    })
  }


  handleReview = (e) =>{
    e.preventDefault()
    // this.setState({
    //     reviews: this.state.reviews.push(e.target.value)
    // })
    console.log('you wrote a review:', e.target.value)
}

  logout = () => {
    this.setState({ user: null })
  }

  setUser = (username, id) => {
    this.setState({ user: username, user_id: id })
  }


  render() {
    console.log('reviews:', this.state.reviews)
    let CurrentPage;
    if (this.state.currentPage === 'directory-page') {
      CurrentPage = <DirectoryPage switchPage={this.switchPage} markets={this.state.markets} />
    }
    if (this.state.currentPage === 'login') {
      CurrentPage = <LoginPage switchPage={this.switchPage} setUser={this.setUser} />
    }
    if (this.state.currentPage === 'signup') {
      CurrentPage = <SignupPage switchPage={this.switchPage} setUser={this.setUser} />
    }
    if (this.state.currentPage === 'show') {

      CurrentPage = <DetailCard switchPage={this.switchPage} id={this.state.id} name={this.state.marketName} user={this.state.user} />
    }
    if (this.state.currentPage === 'write-review') {
      CurrentPage = <ReviewForm switchPage={this.switchPage} name={this.state.marketName} market_id={this.state.id} user_id={this.state.user_id} />
    }
    return (
      <div >
        <div className="center">LocalFood Pal</div>
        <div className="right">
          {this.state.user ?
            <div>
              <p>Logged in as {this.state.user}</p>
              <button onClick={() => this.logout()}>Logout</button>
            </div>
            :
            <div>
              <button onClick={() => this.switchPage("login")}>Login</button>
              <button onClick={() => this.switchPage("signup")}>Create Account</button>
            </div>
          }

        </div>
        {CurrentPage}
      </div>
    )
  }
}

export default App;
