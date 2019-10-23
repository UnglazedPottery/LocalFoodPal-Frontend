import React from "react";
import "../App.css";

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }

    handleLogin = (e) => {      
        e.preventDefault()
        fetch('http://localhost:3002/login', {
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
                    this.props.setUser(user.username)   //?
                    this.props.switchPage('directory-page')
                } else {
                    this.setState({ error: true })
                }
            })
            .catch( () =>  this.setState({ error: true }))

    }

    render() {
        let errorMessage = null
        if (this.state.error) {
            errorMessage = "Invalid Login"
        }
        return (
            <form onSubmit={this.handleLogin}>
                <div className="error">{errorMessage}</div><br/><br/>
                username:<input name="username" /><br /><br />
                password:<input type="password" name="password" />
                <input type="submit" value="Log In" />
            </form>
        )
    }
}

export default LoginPage;