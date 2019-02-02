import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            userPassword: '',
            confirmUserPassword: '',
            redirectUser: null

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // handles changes taking effect
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    // handles the submission made by user for app registration
    handleSubmit(event) {
        event.preventDefault()

        // This request will be sent to the server to add a new user - username & user password
        axios.post('/user/', {
            username: this.state.username,
            userPassword: this.state.userPassword
        })
            .then(response => {
                if (!response.data.errmsg) {
                    this.setState({ // redirect user to the login page
                        redirectUser: '/login'
                    })
                } else {
                }
            }).catch(error => {
                console.log('signup error, someone already exists with that username: ')
                console.log(error)
            })
    }


    render() {
        if (this.state.redirectUser) {
            return <Redirect to={{ pathname: this.state.redirectUser }} />
        } else {
            return (
                // container holding in divs for signing-up
                <div className="SignUpContainer">
                    <div className="SignupForm">
                        <h4>Sign-Up for Speech Share</h4>
                        <form>
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
                                    placeholder="Type Password"
                                    type="password"
                                    name="password"
                                    value={this.state.userPassword}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group ">
                                <button
                                    className="btn btn-primary col-mr-auto"
                                    onClick={this.handleSubmit}
                                    type="submit"
                                > Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            )
        }
    }
}

export default SignUp