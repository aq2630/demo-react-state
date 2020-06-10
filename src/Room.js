import React, { useState } from 'react';
import "./Room.css";


function Room() {
    let [isLit, setLit] = useState(true);
    let [temp, setTemp] = useState(72);
      
  return (
    <div className={`room ${isLit? "lit" : "dark"}`}>      
        <h2>This Room is = {isLit ? "Lit" : "Dark"} </h2>
      <br />
      <button onClick={() => setLit(isLit = true)}>On</button>
      <br />   
      <button onClick={() => setLit(isLit = false)}>Off</button>
      <br /> 
        <h2>Room Temperature  = {temp}     </h2>
     
      <br />     
      <button onClick={() => setTemp(++temp)}>
            Increase Temperature
       </button>
       <br />
       <button onClick={() => setTemp(--temp)}>
            Decrease Temperature
       </button>
    </div>
  );
}

export default Room;
