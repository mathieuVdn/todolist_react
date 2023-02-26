// fonction permettant l'ajout d'une task
import UserId from "../../cheat/UserId";

function PostTasks( name, description, amount, taskList_id) {
    const requestoption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, amount, taskList_id })

    }
    return fetch(`http://localhost:3004/tasksList/task/${UserId}`, requestoption)
        .then(response => response.json());
}

export default PostTasks;