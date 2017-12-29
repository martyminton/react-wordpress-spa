import React, { Component } from 'react';
import Api from './data/Wordpress/Api.jsx';
import { PostList, Post } from './data/Wordpress/PostList.jsx';
import { Switch, Route } from 'react-router-dom';
import GlobalMenu from './global/GlobalMenu.jsx';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <GlobalMenu />
                <h1>Welcome to API</h1>
                <Switch>
                    <Route exact path="/" component={PostList} />
                    <Route path="/post/:id" component={Post} />
                </Switch>
            </div>
        );
    }
}

export default App;
