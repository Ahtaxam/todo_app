import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'

function Home() {
    const [todos,setTodos] = useState([])
    useEffect(() =>{
       getDataFromServer()
       document.title = "Todo App"
        
    })

    const getDataFromServer = () =>{
       setTimeout(() => {
            axios.get("http://localhost:3000/todos")
        .then(res => setTodos(res.data))
       }, 2000);
    }
    
    const deleteTodo = (id) =>{
        const todo = [...todos]
        const to = todo.filter(todo => todo.id !== id)
        axios.delete(`http://localhost:3000/todos/${id}`).then(()=>{
            getDataFromServer()
        })
    }
    return (
        <div>
                     
            <Link to = "/add" className = "btn btn-primary m-4" >Add Todo</Link>  
            <div className = "m-4 col-8">
            <table className="table">
                <thead className="table-dark ">
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Date</td>
                        <td colSpan = "3" className  ="text-center " >Action</td>
                    </tr>
                </thead>
                <tbody>
                
                {
                    
                todos.length ?  todos.map(res => (
                        <tr key = {res.id} >
                            <td>{res.id}</td>
                            <td>{res.title}</td>
                            <td>{res.description}</td>
                            <td>{res.date}</td>
                            <td>
                                <Link to ={`/edit/${res.id}`} className = "btn btn-warning" >Edit</Link>
                            </td>
                            <td>
                                <button className = "btn btn-danger" onClick = {() =>deleteTodo(res.id)} >Delete</button>
                            </td>
                             <td>
                                <Link to = {`detail/${res.id}`} className = "btn btn-primary"  >Detail</Link>
                            </td>
                        </tr>
                    )):<Loading></Loading>
                }
                        
                
                </tbody>
                </table>    
            </div>    
        </div>
    )
}

export default Home
