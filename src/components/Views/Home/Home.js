import React, {Component} from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Welcome to Fempire</h1>
                <p>This is a list of women tech speakers & organizers.</p>

                <p> Also included in this list is a list of women who would LIKE to get involved & a list of PEOPLE that
                    would like to help and mentor women.</p>

                <p>This list originally started from a Twitter list kept by <a
                    href="https://twitter.com/ladyleet">@ladyleet</a> - it's not complete, but it's a start if you'd
                    like to follow!</p>

                <p>Check out the <a
                    href="https://github.com/fempire">GitHub repo</a>, too.</p>
            </div>
        );
    }
}

export default Home;
