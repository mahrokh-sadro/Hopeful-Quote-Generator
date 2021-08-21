

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
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <h1>this.fetchingAPI(); </h1>
        )
    }
}

export default App;