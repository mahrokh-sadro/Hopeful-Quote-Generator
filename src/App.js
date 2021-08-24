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
                this.setState({ advice: res.data.slip.advice })
            })
            .catch(err => {        
                alert('Error!');
            })
    }
    render() {
       
            const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchingAPI}>
                        <span>Advise Me!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;