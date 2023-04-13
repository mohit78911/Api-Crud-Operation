import React, { useState } from 'react'

function User(props) {
    const [name,setName]=useState(false)
  return (
    <>
    <div>hello Mohit</div>
    <h2>This is {props.name}</h2>
    <h1>{name? 'Mohit' : 'Aaris'}</h1>
    <button onClick={()=>setName(!name)}>Change The Value</button>
    </>
  )
}
export default User;