import React, { Fragment, Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
// import SpeechAdd from '../Speech-Add/index';
import "./style.css"


class Politics extends Component {

    state = {
        speeches: []
    }

    componentDidMount() {
        this.getPolitics()
    }

    getPolitics = () => {
        axios.get("/politics").then(res => {
            this.setState({ speeches: res.data })
        })
        console.log(this.state.speeches)
    }


    render() {
        const userLoggedIn = this.props.userLoggedIn;
        return (
            <Fragment>
                <div className="SpeechGenres">
                    <ul>
                        <li><Link to="/speech-forum/sports">Sports</Link></li>
                        <li><Link to="/speech-forum/films">Films</Link></li>
                    </ul>
                </div>
                <div className="jumbotron jumbotron-fluid" id="politicsJumbo">
                    <div className="container">
                        <h1 className="display-4 text-center">Political Speeches</h1>
                        <p className="lead text-center">No Need for Politics...</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="createNew float-right">
                        {userLoggedIn ? (
                            <Link to="/newspeech" className="btn btn-warning float-right" role="button">Create New Speech</Link>
                        ) : (
                            <Link to="/login" className="btn btn-warning float-right" role="button">Create New Speech</Link>
                        )}
                        </div>
                        {/* <div className="posts col-md-12">
                            <ul>
                                {this.state.speeches.map(speech => (

                                    <SpeechAdd
                                        key={speech._id}
                                        id={speech._id}
                                        title={speech.title}
                                        author={speech.author}
                                    />
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Politics;