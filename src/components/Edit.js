import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory,useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import Loading from './Loading';

function Edit() {
    const history = useHistory()
    
    const {id} = useParams()
    const [todo,setTodo] = useState({
        title:'',
        description:'',
        date:''
    })
    const {title,description,date} = todo
    
    useEffect(() =>{
        setTimeout(() => {
            axios.get(`http://localhost:3000/todos/${id}`)
        .then(res => setTodo(res.data))
        }, 1000);
        
    },[])

    const change = (e)=>{
        setTodo({...todo,[e.target.name]:e.target.value})
    }
    
    const submitTodo = ()=>{
        axios.put(`http://localhost:3000/todos/${id}`,todo).then(res=>{})
        history.push('/')
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
                        name = "title"
                        value = {title}
                        // onChange = {e => setTitle(e.target.value)}
                        onChange = {(e) => change(e)}
                        />
                    </div>
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Description</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name = "description"
                        value = {description}
                        // onChange = {e => setDescription(e.target.value)}
                        onChange = {(e) => change(e)}
                        />
                    </div>
                     <div className = "mb-3">
                        <label for="exampleInputEmail1" className="form-label">Date</label>
                        <input type="date" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name = "date"
                        value = {date}
                        // onChange = {e => setDate(e.target.value)}
                        onChange = {(e) => change(e)}
                        />
                    </div>
                    <button type="submit"  className="btn btn-primary mr-4">Edit</button>
                    <Link to = "/" className="btn btn-danger m-4">Cancel</Link>
                </div>
                </form>
        </div>
    )
   
}



export default Edit
