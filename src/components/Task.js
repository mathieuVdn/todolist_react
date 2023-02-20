import React from 'react';
import Navbar from "./constructor/Navbar";
import '../css/home.css';
import '../css/task.css';
import { useState, useEffect } from 'react';
import getTaskLists from "./api/getTaskLists";
import putTask from "../method/put/putTask";

const Task = () =>{
    const [tasklist, setTasklist] = useState([]);
    const currentTask = getTaskLists();
    useEffect(() => {
        setTasklist(currentTask);
    }, [currentTask]);

    return (
            <div>
                <Navbar />
                <main>
                    <section className="container">
                        <h1>Mes taches </h1>
                        <div className="cardsTaskContainer">
                            {Array.isArray(tasklist) && tasklist.map((tasklist, index) => {
                                return (
                                    <div className="cardsTask" key={index}>
                                        <div className="flex-ai">
                                            <h3>{tasklist.title}</h3>
                                            <span className="material-symbols-outlined">delete</span>
                                        </div>

                                        {Array.isArray(tasklist.tasks) && tasklist.tasks.map((task, index) => {
                                            return (
                                                <ul className="cards">
                                                    <li key={index}>

                                                        {(!task.active) ? <span className="material-symbols-outlined" onClick={
                                                            () => {
                                                                if (task.active) {
                                                                    putTask(task.id, {active: false})
                                                                        .then((response) => {
                                                                            setTasklist([... tasklist, response]);
                                                                        });
                                                                }else {
                                                                    putTask(task.id, {active: true})
                                                                        .then((response) => {
                                                                            setTasklist([... tasklist, response]);
                                                                        });
                                                                }
                                                            }
                                                        }>check_box</span> : <span onClick={
                                                            () => {
                                                                if (task.active) {
                                                                    putTask(task.id, {active: false})
                                                                        .then((response) => {
                                                                            setTasklist([... task.active, response]);
                                                                        });
                                                                }else {
                                                                    putTask(task.id, {active: true})
                                                                        .then((response) => {
                                                                            setTasklist([... task.active, response]);
                                                                        });
                                                                }
                                                            }
                                                        } className="material-symbols-outlined">check_box_outline_blank</span>}
                                                    </li>
                                                    <li>
                                                        <h4>{task.name}</h4>
                                                    </li>
                                                    <li>
                                                        <p className='description'>{task.description}</p>
                                                    </li>
                                                    <li className='flex-ai-center'>
                                                        <span className="material-symbols-outlined">remove</span>
                                                        <p className='amount'>{task.amount}</p>
                                                        <span className="material-symbols-outlined">add</span>
                                                    </li>
                                                    <li>
                                                        {/*    span suppression de task*/}
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </li>
                                                </ul>
                                            );
                                        })}
                                        <form className="formTask">
                                            <input type="text" name="name" placeholder="name" />
                                            <input type="text" name="description" placeholder="Description" />
                                            <input type="text" name="amount" placeholder="Quantité" />
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </main>
            </div>
    );
};
export default Task;