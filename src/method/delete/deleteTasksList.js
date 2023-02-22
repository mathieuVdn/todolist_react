const DeleteTasksList = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3004/tasksList/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                resolve(json);
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(error);
            });
    });
};

module.exports = DeleteTasksList;
