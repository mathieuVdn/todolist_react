import React from 'react';
import logo from '../../img/logo-listo.png';
import navbar from '../../css/navbar.css';
import { NavLink } from 'react-router-dom';
import ConnectApi from '../api/ConnectApi';
import UserId from '../../cheat/UserId';
import Tasklists from '../Tasklists';

const Navbar = () => {

    const users = ConnectApi();
    let activeStyle = {
        textDecoration: 'underline',

    }
    return (
        <nav>
            <a href="/">
                <img src={logo} alt="Logo de la marque listo" />
            </a>
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={activeStyle}

                    >
                        Accueil
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact
                        to="/tasklist"
                        activeStyle={activeStyle}

                    >
                        Liste des tâches
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact
                        to="/task"
                        activeStyle={activeStyle}
                    >
                        Tâches
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact
                        to="/login"
                        activeStyle={activeStyle}
                    >
                    <a>
                        <span className="material-symbols-outlined">account_circle</span>
                    </a>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
