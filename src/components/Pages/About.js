import React from 'react'

export default function About() {
    return (
        <div>
            <h1 className="display-4">About Contact Manager</h1>
            <p className="lead">Simple app</p>
            <p className="text-secondary">v1.0.0</p>
        </div>
    )
}

// To get properties use {props.match.params.name}