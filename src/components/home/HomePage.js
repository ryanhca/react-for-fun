import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React Practice</h1>
                <div>A really simple app to play around with Redux and React-Router ect.</div>                
            </div>
        );
    }
}

export default HomePage;