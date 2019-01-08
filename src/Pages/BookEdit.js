import React,{Component} from 'react';
import Axios from 'axios';
import NavBar from '../Components/Navbar'
import { Button } from 'reactstrap';
import {Redirect} from 'react-router-dom'
import './BookCreacte.css';

export default class BookCreact extends Component{
    state = {
        author : [],
        judul : "",
        id_author : 0,
        isEdit : false

    }
    getauthor=()=>{
        Axios.get("https://api-demo.koding.sch.id/api/author")
        .then(res=>{
            console.log(res.data.data);
            this.setState({
                author : res.data.data
            })
            console.log(this.state.author, '>>>>>>ini')
        })
        .catch(err=>{
            console.log(err);
        })
    }
    editBook=()=>   {
        Axios.put(`https://api-demo.koding.sch.id/api/book/${this.props.match.params.id}`,{
            judul : this.state.judul,
            id_author : this.state.id_author
        })
        .then((res)=>{
            this.setState({
                isEdit: true
            })
        })
        .catch((err)=>{

        })

    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })

    }
    
        
    componentDidMount(){
        this.getauthor();
        
    }

    render(){
        console.log(this.state.judul)
        console.log(this.state.id_author)
        return(

            <div className="buku"> 
              <NavBar/>
              {this.state.isEdit===true && (<Redirect to="/book" />)}
              <br/>
              <br/>
               <center><input id="judul" type="text" value={this.state.judul} onChange={this.handleChange} placeholder="Ketik Judul Buku"/></center>
               <br/>
               <br/>
               <h2>Penulis :</h2>
               <center>
                   <select id="id_author" className="im" onChange={this.handleChange}>
               {this.state.author.map((value, index)=>{
                    return<option value={value.id}>{value.name}</option>
                })}
                    
                </select>
                </center>
                <br/>
                <center>
                <Button color="outline-warning" onClick={()=>{this.editBook()}}>simpan</Button>{' '}
                <Button  color="outline-warning" >batal</Button>{' '}
                </center>

            </div>
        )
    }
}