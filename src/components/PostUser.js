import React from 'react';
import postUsers from '../method/post/postUser';
import '../css/postUser.css';
const PostUser = () => {
    return (
        <div>
            <form method='post' onSubmit={(e)=>{

           e.preventDefault();
              const username = (e.target.username.value).toLowerCase();
                const mail = (e.target.mail.value).toLowerCase();
                const age = e.target.age.value;
                const password = e.target.password.value;
                postUsers(username, mail, age, password);
            }}>
                <input type="text" name="username" placeholder="name" />
                <input type="text" name="mail" placeholder="mail" />
                <input type="password" name="password" placeholder="password" />
                <input type="number" name="age" placeholder="age" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostUser;