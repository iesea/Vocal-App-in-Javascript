import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";

const Home = () =>{

    return (
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <button class="buttonPages"> SING</button>
            <button class="buttonPages">
            <Button href="/studio">STUDIO</Button>
            </button>
        </div>
    )
}

export default Home


