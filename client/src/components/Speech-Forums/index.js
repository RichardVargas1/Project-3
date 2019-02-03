// import React, { Fragment, Component } from 'react';
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import SpeechAdd from '../Speech-Add/index';
// import './style.css'


// class SpeechForum extends Component {

//     state = {
//         speeches: []
//     }

//     componentDidMount() {
//         this.getSpeeches()
//     }

//     getSpeeches = () => {
//         axios.get("/all").then(res => {
//             // console.log(res.data)
//             this.setState({ speeches: res.data })
//         })
//     }

//     render() {
//         const userLoggedIn = this.props.userLoggedIn;
//         return (
//             <Fragment>
//                 <div className="genres">
//                     <ul>
//                         <li><Link to="/forum">All</Link></li>
//                         <li><Link to="/speech-forum/politics">Politics</Link></li>
//                         <li><Link to="/speech-forum/sports">Sports</Link></li>
//                         <li><Link to="/speech-forum/films">Films</Link></li>
//                     </ul>
//                 </div>
//                 <div className="jumbotron jumbotron-fluid" id="alltron">
//                     <div className="SpeechContainer">
//                     </div>
//                 </div>
//                 <div className="SpeechForumContainer">
//                     <div className="row">
//                         <div className="posts col-md-12">
//                             <ul>
//                                 {this.state.speeches.map(speech => (

//                                     <SpeechAdd
//                                         key={speech._id}
//                                         id={speech._id}
//                                         title={speech.title}
//                                         author={speech.author}
//                                     />
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default SpeechForum;