import React from 'react';
import Navbar from "./constructor/Navbar";
import '../css/home.css';
import '../css/task.css';
import { useState, useEffect } from 'react';
import getTaskLists from "./api/getTaskLists";
import putTask from "../method/put/putTask";
import PostTasks from "../method/post/PostTasks";

const Task = () =>{
    const [tasklist, setTasklist] = useState([]);
    const currentTask = getTaskLists();

    useEffect(() => {
        setTasklist(currentTask);
    }, [currentTask]);
    console.log(tasklist)



    return (
            <div>
                <Navbar />
                <main>
                    <section className="container">
                        <h1>Mes taches </h1>
                        <div className="cardsTaskContainer">
                            {tasklist.map((tasklist, index) => {
                                return (
                                    <div className="cardsTask" key={index}>
                                        <div className="flex-ai">
                                            <h3>{tasklist.title}</h3>
                                            <span className="material-symbols-outlined">delete</span>
                                        </div>

                                        {tasklist.tasks.map((task, index) => {
                                            console.log(task)
                                            return (
                                                <ul className="cards">
                                                    <li key={index}>

                                                        {(!task.active) ? <span className="material-symbols-outlined" onClick={
                                                            () => {
                                                                if (task.active) {
                                                                    putTask(task.id, {active: false})
                                                                        .then((response) => {
                                                                            console.log(response)
                                                                            setTasklist([...tasklist.task.active, response]);
                                                                        });
                                                                }else {
                                                                    putTask(task.id, {active: true})
                                                                        .then((response) => {
                                                                            console.log(response)
                                                                            setTasklist([...tasklist.task.active, response]);
                                                                        });
                                                                }
                                                            }
                                                        }>check_box</span> : <span onClick={
                                                            () => {
                                                                if (task.active) {
                                                                    putTask(task.id, {active: false})
                                                                        .then((response) => {
                                                                            console.log(response)
                                                                            setTasklist([...tasklist.task.active, response]);
                                                                        });
                                                                }else {
                                                                    putTask(task.id, {active: true})
                                                                        .then((response) => {
                                                                            console.log(response)
                                                                            setTasklist([...tasklist.task.active, response]);
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
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </li>
                                                </ul>
                                            );
                                        })}
                                        <form className="formTask" method="POST" onSubmit={(e) => {
                                            e.preventDefault();
                                            let tasklistId = tasklist.id;
                                            const name = e.target.name.value;
                                            const description = e.target.description.value;
                                            const amount = e.target.amount.value;

                                            PostTasks(name, description, amount, tasklistId)
                                        }}>
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