import React, { useState } from 'react'

function Event(){
  const [count,setcount]=useState(0);

function changec(){
    setcount(count+1);  
  }

  return (
    <div>
      <button onClick={changec()}><h1>{count}</h1></button>
    </div>
  )
}

export default Event
