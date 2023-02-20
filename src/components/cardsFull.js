import React from 'react';
import ConnectApi from './api/ConnectApi';

const CardsFull = () => {
    const data = ConnectApi();

    return (
        <div>
            <div>{data.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.username}</h1>
                        <p>{item.mail}</p>
                        <p>{item.TaskLists.map}</p>
                        <div>
                            {item.TaskLists.map((item, index) => {
                                return (
                                    <div>
                                        <div key={index}>
                                            <h3>{item.title}</h3>
                                            <p>{item.date}</p>
                                        </div>
                                        <div>
                                            {item.tasks.map((item, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li>{item.name}</li>
                                                    </ul>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}</div>
        </div>
    );
};

export default CardsFull;