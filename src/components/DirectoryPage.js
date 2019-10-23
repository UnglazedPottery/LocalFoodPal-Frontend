import React from "react";
import "../App.css";
import MarketList from "./MarketList";
import EnterZipBox from "./EnterZipBox";

class DirectoryPage extends React.Component {

    state = {
        zip: "",
        markets: []
    }

    fetchStuff = (e) => {
        e.preventDefault()
        fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${this.state.zip}`)
          .then(resp => resp.json())
          .then(x => {
            console.log(x)
            return this.setState({ markets: x.results })
          })
      }

    handleZip = (e) => {
        this.setState({
            zip: e.target.value
          })
    }

    render() {
        return (
            <div >
                <EnterZipBox switchPage={this.props.switchPage} handleZip={this.handleZip} fetchStuff={this.fetchStuff}/>
                <MarketList switchPage={this.props.switchPage}  markets={this.state.markets}/>
            
                
            </div>
        )
    }
}

export default DirectoryPage;
