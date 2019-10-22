import React from "react";
import "../App.css";

class MarketCard extends React.Component {

    render() {
        let { market, switchPage } = this.props;
        return (
            <div
                className="market-card" key={market.id}
                onClick={() => switchPage("show", market.id, market.marketname)}>
                <h2>{market.marketname}</h2>
            </div>
        )
    }

}

export default MarketCard;