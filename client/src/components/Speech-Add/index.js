import React from 'react'

const AddSpeech = props => (
    <li className="card border-info mb-3">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
            <p className="card-text">{props.synopsis}</p>
            <p className="card-text">Author: <strong>{props.author}</strong></p>
        </div>
    </li>
)

export default AddSpeech