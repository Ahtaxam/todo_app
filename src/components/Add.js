import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Add() {
    const history = useHistory()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const submitTodo = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/todos",{
            title,
            description,date
        }).then(res =>console.log(res.data))

        history.push("/")
    }
    
    return (
        <div>
            <form onSubmit = {submitTodo} >
                <div className = "container col-4">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange = {e => setTitle(e.target.value)}
                        />
                    </div>
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Description</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange = {e => setDescription(e.target.value)}
                        />
                    </div>
                     <div className = "mb-3">
                        <label for="exampleInputEmail1" className="form-label">Date</label>
                        <input type="date" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange = {e => setDate(e.target.value)}
                        />
                    </div>
                    <button type="submit"  className="btn btn-primary mr-4">Add</button>
                    <Link to = "/" className="btn btn-danger m-4">Cancel</Link>
                </div>
                </form>
        </div>
    )
}

export default Add
