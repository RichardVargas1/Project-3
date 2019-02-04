import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'; import SpeechAdd from '../Speech-Add/index';
import "./style.css"


class SportsDB extends Component {

    state = {
        SportsDB: []
    }

    componentDidMount() {
        this.getSports()
    }

    getSports = () => {
        axios.get("/api/speech/sports").then(res => {
            this.setState({ sportsDB: res.data })
        })
        console.log(this.state.sportsDB)
    }


    render() {
        // const userLoggedIn = this.props.userLoggedIn;
        return (
            <Fragment>
                {/* <div className="SpeechGenres">
                    <ul>    
                        <li><Link to="/films">Films</Link></li>
                        <li><Link to="/politics">Politics</Link></li>
                    </ul>                
                </div> */}
                <div id="sportsJumbo">
                    <div className="container">
                        <h1 className="display-4 text-center">Sports Speeches</h1>
                        <p className="lead text-center">Go Sports Team!</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* <div className="createNew float-right">
                            {userLoggedIn ? (
                                <Link to="/newspeech" className="btn btn-warning float-right" role="button">Create New Speech</Link>
                            ) : (
                                    <Link to="/login" className="btn btn-warning float-right" role="button">Create New Speech</Link>
                                )}
                        </div> */}
                        <div className="posts col-md-12">
                            <ul>
                                {this.state.sportsDB.map(sports => (
                                    <SpeechAdd
                                        id={sports.id}
                                        key={sports.id}
                                        title={sports.title}
                                        author={sports.author}
                                        synopsis={sports.synopsis}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SportsDB;