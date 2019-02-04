import React, { Fragment, Component } from 'react';
// import {Link} from 'react-router-dom'
import axios from 'axios';
import SpeechAdd from '../Speech-Add/index';
import "./style.css"


class FilmsDB extends Component {

    state = {
        filmsDB: []
    }

    componentDidMount() {
        this.getFilms()
    }

    getFilms = () => {
        axios.get("/api/speech/films").then(res => {
            this.setState({ filmsDB: res.data })
        })
        console.log(this.state.filmsDB)
    }


    render() {
        // const userLoggedIn = this.props.userLoggedIn;
        return (
            <Fragment>
                {/* <div className="SpeechGenres">
                    <ul>
                        <li><Link to="/politics">Politics</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                    </ul>
                </div> */}
                <div id="filmsJumbo">
                    <div className="container">
                        <h1 className="display-4 text-center">Film Speeches</h1>
                        <p className="lead text-center">Speeches You'll find on Facebook, Shared From Your Relative.</p>
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
                                {this.state.filmsDB.map(films => (
                                    <SpeechAdd
                                    id={films.id}
                                    key={films.id}
                                    title={films.title}
                                    author={films.author}
                                    synopsis={films.synopsis}
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

export default FilmsDB;