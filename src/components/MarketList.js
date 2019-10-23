import React from "react";
import "../App.css";
import MarketCard from "./MarketCard";

class MarketList extends React.Component {
    

    render() {
        console.log("markets", this.props.markets)
        return (
            <div className="market-list">
				<h2>Markets Near You</h2>
				<div >
					{this.props.markets.map(market => {
						return <MarketCard market={market} viewMarket={this.props.viewMarket} key={market.id} 
								switchPage={this.props.switchPage}/>
					})}
				</div><br />
			</div>
        )
    }
}

export default MarketList;