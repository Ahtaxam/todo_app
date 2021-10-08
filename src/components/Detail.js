import React from 'react'
import { useEffect } from 'react'

import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import react from 'react'
import Loading from './Loading'

function Detail() {
    const {id} = useParams()
    const history = useHistory()
    const [todo,setTodo] = useState({
        title:'',
        description:'',
        date:''
    })
    const [value,setValue] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:3000/todos/${id}`)
        .then(res =>setTodo(res.data))
        setTimeout(() => {
            setValue(true)
        }, 1000);
    },[])
    const deleteTodo = () =>{
        axios.delete(`http://localhost:3000/todos/${id}`).then(()=>{
            
        })
        history.push('/')

    }
    return (
        <React.Fragment>
            {
                value === true ?
        <div>
            <div className  ="container">
            <div className="card  mt-4" style={{widows:"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Todo # {todo.id} : {todo.title} </h5>
                    <h6 className="card-subtitle mb-2 mt-2">{todo.description} </h6>
                    <p className="card-text text-muted">Due Date: { new Date(todo.date).toLocaleString()} </p>        
                </div> 
            </div>
        <Link to = {`/edit/${id}`} className  ="btn btn-warning m-4" >Edit</Link>
        <button className = "btn btn-danger " onClick = {deleteTodo} > Delete</button>
        </div>
        </div>:<Loading></Loading>}
        </React.Fragment>
    )
}

export default Detail
