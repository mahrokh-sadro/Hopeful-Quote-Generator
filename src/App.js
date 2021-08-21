

import React from 'react';
import axios from 'axios';


import './App.css';

class App extends React.Component {
    state = { advice: '' };
    componentDidMount() {
        this.fetchingAPI();
    }

    fetchingAPI = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                console.log(res.data.slip.advice);
                this.setState({ advice: res.data.slip.advice })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <div className="button">
                        <span>Advise Me!</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;