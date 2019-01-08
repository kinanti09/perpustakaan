import React, {Component} from 'react';
import Axios from 'axios';

import Cards from '../Components/Card';
import {Router, Switch} from 'react-router-dom';
import NavBar from '../Components/Navbar'

export default class Book extends Component{
    state = {
        books : []
    }
    getbook=()=>{
        Axios.get("https://api-demo.koding.sch.id/api/book")
        .then(res=>{
            console.log(res.data.data);
            this.setState({
                books : res.data.data
            })
            console.log(this.state.books, '>>>>>>ini isi buku')
        })
        .catch(err=>{
            console.log(err);
        })
    }

    deleteBook=(id)=>{
        Axios.delete(`https://api-demo.koding.sch.id/api/book/${id}`)
        .then(res=>{

            this.getbook()
        })
        .catch(err=>{
            alert("Hapus Gagal")
        })
    }
        
    componentDidMount(){
        this.getbook();
    }
    render(){
        return(
            
            <div>
                <NavBar/>
                <div className="uku">
                {this.state.books.map((value, index)=>{
                    console.log(value.judul)
                    return<Cards judul={value.judul} deleteBook={this.deleteBook} id={value.id} author={value.author.name}/>
                })}
              </div>
            </div>
        );
    }
    
}