import React from "react";
import "../App.css";

class SignupPage extends React.Component {

    handleSignup = (e) => {
        e.preventDefault()
        
    }

    render() {
        return (
            <form onSubmit={this.handleSignup}>
                username:<input name="username"/><br/><br/>
                password:<input name="password"/>
                <input type="submit" value="Create Account"/>
            </form>
        )
    }
}

export default SignupPage;