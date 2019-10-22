import React, { Component } from "react";
import "./App.css";
import DirectoryPage from "./components/DirectoryPage";
import DetailCard from "./components/DetailCard";
import ReviewForm from "./components/ReviewForm";

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
    if (this.state.currentPage === 'show') {
      CurrentPage = <DetailCard switchPage={this.switchPage} id={this.state.id} name={this.state.marketName}/>
    }
    if (this.state.currentPage === 'write-review') {
      CurrentPage = <ReviewForm switchPage={this.switchPage} />
    }
    return (
      <div >
        <h1 className="center">LocalFood Pal</h1>
        {CurrentPage}
      </div>
    )
  }
}

export default App;
