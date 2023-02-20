import UserId from '../../cheat/UserId'
function postTasksList(title, description) {
    const requestoption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, UserId })
    };
    return fetch(`http://localhost:3004/tasksList/${UserId}`, requestoption)
        .then(response => response.json());
}

export default postTasksList;
