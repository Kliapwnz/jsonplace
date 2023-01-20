import React, {useEffect, useState} from 'react';

import './App.css';
import {SuperButton} from "./components/SuperButton";

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number

}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])

    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        myFetch()
    }, [])

    const ShowThisHandler = () => {
        myFetch()
    }

    const deleteHandler = () => {
        setTodos([])
    }

    const mappedTodos = todos.map((e) => {
        return (
            <li key={e.userId}>
                <span>{e.id} </span>
                <span>{e.title}</span>
                <input type="checkbox" checked={e.completed}/>
            </li>
        )
    })
    return (
        <div className="App">
            <SuperButton name={"Show me This"} callBack={ShowThisHandler}/>
            <SuperButton name={"NE NADO"} callBack={deleteHandler}/>
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;
