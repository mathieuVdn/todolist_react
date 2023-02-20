import UserId from "../../cheat/UserId";

function putTasksList(id, active) {
    if (active === true) {
    const requestoption = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(active)
    }

        return fetch(`http://localhost:3004/tasks/${id}`, requestoption)
            .then(response => response.json());
}
    else {
        const requestoption = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(active)
        }

            return fetch(`http://localhost:3004/tasks/${id}`, requestoption)
                .then(response => response.json());
        }
}



export default putTasksList;