import React from 'react';
import postUsers from '../../method/post/postUser';
import "../../css/login.css";
const CreateAccount = () => {
    return (

        <div>
            <form method='post' className="formAccount" onSubmit={(e)=>{
           e.preventDefault();
              const username = (e.target.username.value).toLowerCase();
                const mail = (e.target.mail.value).toLowerCase();
                const age = e.target.age.value;
                const password = e.target.password.value;
                postUsers(username, mail, age, password);
                e.target.username.value = "";
                e.target.mail.value = "";
                e.target.age.value = "";
                e.target.password.value = "";
            }}>

                <input type="text" name="username" placeholder="Pseudo" />
                <input type="text" name="mail" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Mot de passe"/>
                <input type="number" name="age" placeholder="Age" />

                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateAccount;