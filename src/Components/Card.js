import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
const Cards =(props)=>{
return (
    <div>
        <h1>{props.judul}</h1>
        <h3>{props.author}</h3>
        <button onClick={()=>props.deleteBook(props.id)}>Hapus</button>
        <Link to={`/book/Edit/${props.id}`}><button>Edit</button></Link>
        
    </div>
)
}


export default Cards;