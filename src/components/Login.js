import React from 'react';
import Navbar from "./constructor/Navbar";
import CreateAccount from "./login/CreateAccount";
import ConnectAccount from "./login/ConnectAccount";

const Login = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className="container flex">
                    <section>
                    <h1 className=''>Se connecter</h1>
{/*
                        {<ConnectAccount/>}
*/}
                    </section>
                    <section>
                    <h1>Créer un compte</h1>
                        {<CreateAccount/>}
                    </section>
                </div>

            </main>
        </div>
    );
};

export default Login;