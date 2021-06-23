import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // This is the only time we do direct assignment
    //     // to this.state
    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // We called setState !!
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div className="ui">
                    Error: {this.state.errorMessage}
                </div>
            );
        } 
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div className="ui">
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            );
        }
        return (
            <div className="ui">
                <h1>Loading !!!</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

    // Good place to do data-loading!!
    // componentDidMount() {
    //     console.log("My component was rendered to the screen");
    // }

    // Good place to do more data-loading when state/props change
    // componentDidUpdate() {
    //     console.log("My component was just updated - it re-rendered!!");
    // }

    // Good place to do cleanup!!
    // componentWillUnmount() {}