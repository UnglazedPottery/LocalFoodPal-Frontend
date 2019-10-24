
import React from "react";
import "../App.css";

class MarketCard extends React.Component {

    writeReview = (e) => {
        e.preventDefault()
        fetch('http://localhost:3002/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: e.target.content.value,
                market_id: this.props.market_id,
                user_id: this.props.user_id
            })
        })
        console.log("review made", this.props)
        this.props.switchPage("show", this.props.market_id, this.props.name)
    }

    render() {
        return (
            <div>
                <h1>Write review for </h1>
                <h1>{this.props.name}</h1>
                <form onSubmit={this.writeReview}>
                    date: <input name="date" type="text" /><br/><br/>
                    content: <textarea name="content" rows="5" cols="50"></textarea><br/><br/>
                    stars: <br/><br/>
                    <input type="submit" value="Done"/>
                </form>
            </div>
        )
    }

}

export default MarketCard;