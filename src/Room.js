import React, { useState } from 'react';


function Room() {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(24);
      
  return (
    <div>      
      This Room is = {isLit ? "Lit" : "Dark"}
      <br />
    Age = {age}
      <br />    
      <button onClick={() => setLit(!isLit)}>Toggle Light</button>
      <br />    
      <button onClick={() => {
                        console.log("button Clicked");           
                        setAge(++age);
        }}>
            Increase Age
       </button>
    </div>
  );
}

export default Room;
