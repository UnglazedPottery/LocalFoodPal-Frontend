import React from "react";
import "../App.css";
import DOMPurify from 'dompurify'; 


class DetailCard extends React.Component {

    state = {
        market: null
    }

    componentDidMount() {
        fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${this.props.id}`)
            .then(response => response.json())
            .then(x => {
                console.log(x.marketdetails)
                return this.setState({ market: x.marketdetails })
            })
    }

    render() {
        DOMPurify.setConfig({ ADD_ATTR: ['target'] });
        let { market } = this.state;
        if (market === null) {
            return <h1>Loading...</h1>
        }
        //replace br in schedule with spaces 
        console.log(market)
        return (
            <div
                className="detail-card" key={market.id}>
                <h1>{this.props.name.slice(4)}</h1>
                <p><strong>Address: </strong>{market.Address}</p>
                <p><strong>Schedule: </strong>{market.Schedule.replace("<br> <br> <br>", "")}</p>
                <p><strong>Products: </strong>{market.Products}</p>
                <a href={market.GoogleLink}>Get Directions</a>
                <form onSubmit={(e) => this.props.handleReview(e)}>
                    <input type="text" placeholder="Write a review..." />
                    <input type="submit" />
                </form>
                <p>reviews</p>
                <button onClick={()=>this.props.switchPage("directory-page")}>Back</button>
            </div>
        )
    }

}

export default DetailCard;