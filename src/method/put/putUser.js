function putUser (username, mail, age) {
        const requestoption = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, mail, age})
        }
        fetch('http://localhost:3004/users', requestoption)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    module.exports = putUser
