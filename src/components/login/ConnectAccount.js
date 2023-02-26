import React from 'react';

const ConnectAccount = () => {
    return (
        <div>
            <form action="POST" className="formAccount">
                <input type="text" name="mail" placeholder="mail" />
                <input type="password" name="password" placeholder="password" />
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ConnectAccount;