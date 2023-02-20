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
                    throw new Error('Network response was not ok');
                }
                resolve(response.json());
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(error);
            });
    });
};
export default DeleteTasksList;