import React from 'react'
import { TextField, Box } from '@mui/material';
import ".//App.css"
import logo from './api.jpg'

function InputBox(props) {
    return (
        <div >
            <div className='container'>
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
                     <TextField
                        id="outlined-error"
                        label="Price"
                        value={props.price} onChange={(e) => props.setprice(e.target.value)}
                    />
                     <TextField
                        id="outlined-error"
                        label="Address"
                        value={props.address} onChange={(e) => props.setaddress(e.target.value)}
                    />
                     <TextField
                        id="outlined-error"
                        label="Image" 
                        value={props.image} onChange={(e) => props.setimage(e.target.value)}
                    />
                </div>
            </Box>
            <button className='btn btn-primary m-2' type="submit">Add Data</button>

            </form>
            <button className='btn btn-success m-2' onClick={()=>props.editHandler()}>Edit Data</button>
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