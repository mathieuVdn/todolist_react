import userId from "../../cheat/UserId";

function deleteUser (){
    const requestoption = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, description, user_id})
    }
    fetch(`http://localhost:3004/users/:id`, requestoption)
        .then(response => response.json())
        .then(data => console.log(data))
}