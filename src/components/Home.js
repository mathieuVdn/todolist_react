import React from 'react';
import connectApi from "./api/ConnectApi";
import { useState, useEffect } from 'react'
import home from '../css/home.css';
import Navbar from "./constructor/Navbar";
import background from '../img/bg-listo.jpg';
import UserId from "../cheat/UserId";

const Home = () => {
    const users = connectApi();
    console.log(users)
    return (
        <div className="home">
            <header>
                <Navbar/>
            </header>
            <main className="banner" style={{backgroundImage: `url(${background})`}}>
                <h1>
                    Bonjour, { users.map (user => {
                        if (user.id === UserId) {
                            return user.username
                        }
                    })}
                </h1>

                <div className="actionButton">
                    <a className="button" href="/tasklist">Voir mes Listes</a>
                    <a className="button" href="/tasks">Ajouter une liste</a>
                </div>
            </main>
        </div>);
};






export default Home;