import UserId from "../../cheat/UserId"
import {useEffect, useState} from "react";
//connexion a l'api
const GetTasklists = (tasklistId) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3004/${tasklistId}`)
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    return data;
}
export default GetTasklists;