import React from 'react';
import './cards.css';
import './App.css';
import CardView from "./СardView/СardView";

const App = () => {

    return (
        <div className="App">
            <CardView rank="K" suit="diams" />
        </div>
    );
};

export default App;
