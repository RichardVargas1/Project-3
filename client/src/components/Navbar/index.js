import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    toggleNavbar = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
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
                <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNavbar}
                                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                                to="/"
                            >
                                Political
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNavbar}
                                className={window.location.pathname === "/sports" ? "nav-link active" : "nav-link"}
                                to="/sports"
                            >
                                Sports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={this.toggleNavbar}
                                className={window.location.pathname === "/film" ? "nav-link active" : "nav-link"}
                                to="/film"
                            >
                                Film
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
