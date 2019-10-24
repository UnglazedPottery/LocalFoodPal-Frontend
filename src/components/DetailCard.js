import React from "react";
import "../App.css";
import ReviewCard from "./ReviewCard";

class DetailCard extends React.Component {

    state = {
        market: null,
        reviews: []
    }

    componentDidMount() {
        fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${this.props.id}`)
            .then(response => response.json())
            .then(x => {
                console.log(x.marketdetails)
                return this.setState({ market: x.marketdetails })
            })
        
        fetch('http://localhost:3002/reviews')
            .then(resp => resp.json())
            .then(reviews => {
                return this.setState({ reviews: reviews })
            })
    }

    render() {
        let { market } = this.state;
        if (market === null) {
            return <h1>Loading...</h1>
        }
        let reviews = this.state.reviews.filter(review=> review.market_id == this.props.id)

        return (
            <div
                className="detail-card" key={market.id}>
                <h1>{this.props.name.slice(4)}</h1>
                <p><strong>Address: </strong>{market.Address}</p>
                <p><strong>Schedule: </strong>{market.Schedule.replace("<br> <br> <br>", "")}</p>
                <p><strong>Products: </strong>{market.Products}</p>
                <button onClick={()=> window.open(market.GoogleLink)}>Get Directions</button>

                {this.props.user ?
                    <div>
                        <button onClick={() => this.props.switchPage("write-review", this.props.id, this.props.name)}>write review</button>
                    </div>
                    :
                    <div>
                        <p className="error">Log in to write a review</p>
                    </div>
                }



                <p>Reviews:</p>
                <div >
                    {reviews.map(review => {
                        return <ReviewCard review={review} key={review.id}/>
                    })}
                </div><br />

                <button onClick={() => this.props.switchPage("directory-page")}>back</button>
            </div >
        )
    }

}

export default DetailCard;