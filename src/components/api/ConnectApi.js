import React from 'react';
import { useState, useEffect } from 'react';

const ConnectApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
       return data;

}
export default ConnectApi;