import React, { Component } from 'react';
import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCGnDG2rHOFRISdeDxu0H-T25Jt-yemDx0',
    authDomain: 'autodemo-c7a73.firebaseapp.com',
    databaseURL: 'https://autodemo-c7a73.firebaseio.com',
    projectId: 'autodemo-c7a73',
    storageBucket: '',
    messagingSenderId: '528138746277'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
