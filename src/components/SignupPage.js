import React from "react";
import "../App.css";

class SignupPage extends React.Component {


    handleSignup = (e) => {
        e.preventDefault()
        fetch('http://localhost:3002/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
            .then(resp => resp.json())
            .then(user => {
                if (user.success) {
                    this.props.setUser(user.username)
                    this.props.switchPage('directory-page')
                } else {
                    alert("Username is taken, try another")
                }
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSignup}>
                username:<input name="username"/><br/><br/>
                password:<input name="password" type="password"/>
                <input type="submit" value="Create Account"/>
            </form>
        )
    }
}

export default SignupPage;