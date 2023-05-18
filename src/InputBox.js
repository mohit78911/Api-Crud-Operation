import React from 'react'
import { TextField, Box } from '@mui/material';
import ".//App.css"
import logo from './api.jpg'

function InputBox(props) {
    return (
        <div >
            <div className='container' style={{width:"100%"}}>
        <div className='row container'>
            <div className='col'>
            <h1 className="ffamily">Input box</h1>
            <form onSubmit={props.onSubmit}> <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '35ch' }
                }}
            >
                <div>
                    <TextField
                        id="outlined"
                        label="Name"
                        value={props.name} onChange={(e) => props.setname(e.target.value)}
                    />
                    <TextField
                        id="outlined-error"
                        label="Email"
                        value={props.email} type="email" onChange={(e) => props.setemail(e.target.value)}
                    />
                    <TextField
                        id="outlined-error"
                        label="City"
                        value={props.city} onChange={(e) => props.setcity(e.target.value)}
                    />
                </div>
            </Box>
            <button className='btn btn-primary m-2' type="submit">Add Data</button>

            </form>
            <button className='btn btn-success m-2' onClick={()=>props.editHandler()}>Edit Data</button>
            <button className='btn btn-secondary m-2' onClick={()=>props.clearHandler()}>Clear Box</button>

            </div>
            <div className='col '>
             <img className='floatPro round' src={logo}/>
            </div>
        </div>
        </div>

        </div>
    )
}
export default InputBox;