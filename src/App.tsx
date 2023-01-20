import React, {useEffect} from 'react';

import './App.css';
import {json} from "stream/consumers";

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
<button onClick={ShowThisHandler}>SHOW ME THIS</button>
    </div>
  );
}

export default App;
