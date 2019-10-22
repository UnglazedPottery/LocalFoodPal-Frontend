import React from "react";
import "../App.css";

class EnterZipBox extends React.Component {

    render() {
        return (
            <form onChange={(e) => this.props.handleZip(e)}>
                <input type="text" />
                <input type="submit" value="Enter Zip" onClick={this.props.fetchStuff}/>
            </form>
        )
    }
}

export default EnterZipBox;