import React from "react";
import "../App.css";

class ReviewCard extends React.Component {

    render() {
        let { review } = this.props;
        return (
            <div
                className="detail-card" key={review.id}>
                <h2>{review.content}</h2>
            </div>
        )
    }

}

export default ReviewCard;