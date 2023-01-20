import React, {useEffect} from 'react';

import './App.css';
import {json} from "stream/consumers";
import {SuperButton} from "./components/SuperButton";

function App() {

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then(response => response.json())
  //       .then(json => console.log(json))
  // },[])

const ShowThisHandler=()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
}

  return (
    <div className="App">
<SuperButton name={"Show me This"} callBack={ShowThisHandler}/>
    </div>
  );
}

export default App;
