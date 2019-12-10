import React, { Component } from 'react'
import api from "../api"

//call api that creates new user
//redirect to login page

class register extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password:"",
            failure: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event){
        
        const registerUser = async (user, pass)=>{
            await api.register({username:user, password:pass}).then((res)=>{
                //call the dispatch function here passing in correct data
                console.log(res)
                //redirects to workout page
            }).catch((error)=>{
                console.log(error);
            })
        }
        registerUser(this.state.username, this.state.password)
        
        event.preventDefault();
    }
    render() {
        return (
            <div>
            <form name="login-form" onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <label>Username
                    <input name="username" type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br />
                <label>Password 
                    <input name="password" type="text" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}

export default register