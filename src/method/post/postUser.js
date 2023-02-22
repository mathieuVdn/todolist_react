function postUser (e,username, mail, age, password) {
    const requestoption = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, mail, age, password})
    }
    fetch('http://localhost:3004/users', requestoption)
        .then(response => response.json())
        .then(data => console.log(data))
    e.current.reset();
}
module.exports = postUser