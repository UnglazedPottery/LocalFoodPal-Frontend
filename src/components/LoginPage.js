import React from "react";
import "../App.css";

class LoginPage extends React.Component {

    handleLogin = (e) => {
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
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                username:<input name="username"/><br/><br/>
                password:<input name="password"/>
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default LoginPage;