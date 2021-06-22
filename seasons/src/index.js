import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        // This is the only time we do direct assignment
        // to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // We called setState !!
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div className="ui container">
                    Error: {this.state.errorMessage}
                    <SeasonDisplay/>
                </div>
            );
        } 
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div className="ui container">
                    Latitude: {this.state.lat}
                    <SeasonDisplay/>
                </div>
            );
        }
        return (
            <div className="ui container">
                Loading !!!
                <SeasonDisplay/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);