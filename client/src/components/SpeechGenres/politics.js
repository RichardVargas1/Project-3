import React, { Fragment, Component } from 'react';
// import {Link} from 'react-router-dom'
import axios from 'axios';
import SpeechAdd from '../Speech-Add/index';
import "./style.css"


class PoliticsDB extends Component {

    state = {
        politicsDB: []
    }

    componentDidMount() {
        this.getPolitics()
    }

    getPolitics = () => {
        axios.get("/api/speech/politics").then(res => {
            this.setState({ politicsDB: res.data })
        })
        console.log(this.state.politicsDB)
    }


    render() {
        // const userLoggedIn = this.props.userLoggedIn;
        return (
            <Fragment>
                {/* <div className="SpeechGenres">
                    <ul>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/films">Films</Link></li>
                    </ul>
                </div> */}
                <div id="politicsJumbo">
                    <div className="container">
                        <h1 className="display-4 text-center">Political Speeches</h1>
                        <p className="lead text-center">Too Spicy, Too Spicy.</p>
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
                                {this.state.politicsDB.map(politics => (
                                    <SpeechAdd
                                        id={politics.id}
                                        key={politics.id}
                                        title={politics.title}
                                        author={politics.author}
                                        synopsis={politics.synopsis}
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

export default PoliticsDB;