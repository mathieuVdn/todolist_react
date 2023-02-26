import React, { useEffect, useRef } from 'react';
import Navbar from "./constructor/Navbar";
import '../css/tasklist.css';
import DeleteTasksList from "../method/delete/deleteTasksList";
import postTasksList from "../method/post/postTasksList";
import { useState } from "react";
import getTaskLists from "./api/getTaskLists";

const Tasklists = () => {
    const [tasklist, setTasklist] = useState([]);
    const currentTask = getTaskLists();
    useEffect(() => {
        setTasklist(currentTask);
    }, [currentTask]);

//     function qui compte le nombre de tache active
    const tasksActive = tasklist.map((tasklist, index) => {
        if (tasklist.tasks && tasklist.tasks.length > 0) {
            return tasklist.tasks.filter((task) => task.active === true).length;
        } else {
            return 0;
        }
    });

    const tasksNotActive = tasklist.map((tasklist, index) => {
        if (tasklist.tasks && tasklist.tasks.length > 0) {
            return tasklist.tasks.filter((task) => task.active === false).length;
        } else {
            return 0;
        }
    });

  const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.title.value;
        const description = e.target.description.value;
        postTasksList(name, description)
            .then((response) => {
                setTasklist([...tasklist, response]);
            })
            .catch((error) => {
                console.error("Error creating task list:", error);
                // Handle the error here (e.g. display an error message)
            });

        e.target.title.value = "";
        e.target.description.value = "";

    }
const handleDeleteTaskList = (id) => {
        DeleteTasksList(id)
            .then((response) => {
                setTasklist(tasklist.filter((item) => item.id !== id));
            })
            .catch((error) => {
                console.error("Erreur:", error);
            });

    };

    return (
        <div>
            <Navbar />
            <main>
                <section className="tasklist container">
                    <h1>Liste des taches </h1>
                    <div className="cardsTaskListContainer">
                        {tasklist.map((item, index) => {
                            return (
                                <div className="cardsTaskList" key={index}>
                                    <div className="flex-ai">
                                        <h3>{item.title}</h3>
                                        <span
                                            className="material-symbols-outlined"
                                            onClick={() => handleDeleteTaskList(item.id)}
                                        >
                                            delete
                                        </span>
                                    </div>
                                    <p>{item.description}</p>
                                    <ul className="flexform">
                                        <li>
                                            tache à accomplir : {item.tasks && item.tasks.length > 0
                                                ? item.tasks.filter((task) => task.active === true)
                                                    .length
                                                : 0
                                        }

                                        </li>
                                        <li>
                                            tache accomplie : {item.tasks && item.tasks.length > 0
                                                ? item.tasks.filter((task) => task.active === false)
                                                    .length
                                                : 0
                                        }
                                        </li>
                                    </ul>
                                    <button className="button" >Voir les taches</button>
                                </div>
                            );
                        })}
                        <div className="cardsTaskList">
                            <h3>Créer une tache</h3>
                            <form
                                className="flexform"
                                method="post"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <input
                                    className="input"
                                    type="text"
                                    name="title"
                                    placeholder="Votre nom"
                                />
                                <textarea
                                    className="textarea"
                                    type="text"
                                    name="description"
                                    placeholder="Une courte description"
                                />
                                <button className="button" type="submit">Enregister</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Tasklists;
