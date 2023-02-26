const DeleteTasksList = (id) => {
    return fetch(`http://localhost:3004/tasksList/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}
export default DeleteTasksList;