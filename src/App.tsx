import React, {useEffect, useState} from 'react';

import './App.css';
import {json} from "stream/consumers";
import {SuperButton} from "./components/SuperButton";

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number

}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])

    const ShowThisHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    return (
        <div className="App">
            <SuperButton name={"Show me This"} callBack={ShowThisHandler}/>
            <ul>
                {todos.map((e) => {
                    return (
                        <li key={e.userId}>
                            <span>{e.id} </span>
                            <span>{e.title}</span>
                            <input type="checkbox" checked={e.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
