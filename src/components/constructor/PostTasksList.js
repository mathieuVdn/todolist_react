import React from 'react';
import postTasksList from "../../method/post/postTasksList";
import UserId from "../../cheat/UserId"

const PostTasksList = () => {
    return (
        <div>
                <form method='post' onSubmit={(e)=>{

                    e.preventDefault();
                    const title = (e.target.title.value);
                    const description = (e.target.description.value);
                    const user_id = UserId
                    postTasksList(title, description, user_id);
                }}>
                    <input type="text" name="title" placeholder="name" />
                    <input type="text" name="description" placeholder="mail" />
                    <button type="submit">Submit</button>
                </form>
        </div>
    );
};

export default PostTasksList;