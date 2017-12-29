import React, { Component } from 'react';

const fb = firebase
    .initializeApp(config)
    .database()
    .ref();

const App = props => {
    console.log('snapshot', props);
    return (
        <div>
            <h1>My Prototype</h1>
            <p>{JSON.stringify(props)}</p>
        </div>
    );
};
