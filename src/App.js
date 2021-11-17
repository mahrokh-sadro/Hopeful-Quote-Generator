import React, { useState } from 'react';
import axios from 'axios';


import './App.css';

const App = () => {

    const [advice, setAdvice] = useState("you are here ! coincedence ? I don't think so");

    const fetchingAPI = () => {
        axios.get('https://api.adviceslip.com/advice')

            .then(res => {
                setAdvice(res.data.slip.advice)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchingAPI}>
                    <span>Advise Me!</span>
                </button>
            </div>
        </div>
    );
}


export default App;