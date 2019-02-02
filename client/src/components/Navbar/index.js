import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import politicsPage from "../../webPages/politicsPage";
import sportsPage from "../../webPages/sportsPage";
import filmsPage from "../../webPages/filmsPage";
import "./style.css";

class Navbar extends Component {
    constructor() {
        super()
        this.logoutApp = this.logoutApp.bind(this)
    }

    logoutApp(event) {
        event.preventDefault()
        axios.post('/user/logoutApp').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedInApp: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('There has been an error in logging out')
        })
    }

    render() {
        const loggedInApp = this.props.loggedInApp;
        // rendering the links for the website in nav
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <Link className="navbar-brand" to="/">
                    Speech Share
                 </Link>
                <button
                    onClick={this.toggleNavbar}
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                {loggedInApp ? (
                    <section className="navbar-section">
                        <Link to="/speechforum" className="btn btn-link ml-5">
                            <span className="text-secondary">Speeches</span>
                        </Link>
                        <Link to="#" className="btn btn-link text-secondary" onClick={this.logoutApp}>
                            <span className="text-secondary">Logout</span></Link>
                    </section>
                ) : (
                        <section className="navbar-section">
                            <Link to="/" className="btn btn-link text-secondary ml-5">
                                <span className="text-secondary">Home</span>
                            </Link>
                            <Link to="/politics" className="btn btn-link text-secondary" component={politicsPage}>
                                <span className="text-secondary">Politics</span>
                            </Link>
                            <Link to="/sports" className="btn btn-link text-secondary" component={sportsPage}>
                                <span className="text-secondary">Sports</span>
                            </Link>
                            <Link to="/films" className="btn btn-link text-secondary" component={filmsPage}>
                                <span className="text-secondary">Films</span>
                            </Link>
                            <Link to="/login" className="btn btn-link text-secondary">
                                <span className="text-secondary">Login</span>
                            </Link>
                            <Link to="/sign-up" className="btn btn-link">
                                <span className="text-secondary">Sign-Up</span>
                            </Link>
                        </section>
                    )}
            </nav>

        );

    }
}

export default Navbar