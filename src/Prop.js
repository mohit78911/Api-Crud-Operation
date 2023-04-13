import React, { useState } from 'react'

export default function Prop() {
    var [email, setEmail]= useState(true)
  return (
    <>
    {
        email?
        <h1>Mohit2suthar@gmail.com</h1>
        : null
    }
    <button onClick={()=>setEmail(false)}>Hide</button>
    <button onClick={()=>setEmail(true)}>Show</button>
    </>
  )
}
