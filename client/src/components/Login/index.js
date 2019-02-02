import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            userPassword: '',
            redirectUser: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // handles changes taking effect
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handles the submission made by user for logging into the Speech Share application
    handleSubmit(event) {
        event.preventDefault()

        // This request will be sent to the server to login the user | Taking in username and password
        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        userLoggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/forum'
                    })
                }
            }).catch(error => {
                console.log('login error, please check your credentials: ')
                console.log(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
               <div className="LoginContainer"> 
                <div className="loginForm">
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                                <label className="form-label" htmlFor="username"></label>
                                <input className="form-input"
                                    placeholder="Enter Username"
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group">
                                <label className="form-label" htmlFor="password"></label>
                                <input className="form-input"
                                    placeholder="Enter Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group ">
                            <button
                                className="btn btn-primary"
                                id="loginButton"
                                onClick={this.handleSubmit}
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
               </div> 
            )
        }
    }
}

export default Login