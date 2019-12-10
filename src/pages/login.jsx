import React, { Component } from 'react'
import api from "../api"
import {useDispatch} from "react-redux"
import {addWorkout} from "../actions/index"


class login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password:"",
            failure: "",
            monthWorkout: [],
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
        let thisWorkout = [];
        
        const getUser = async (user, pass)=>{
            await api.login({username: user, password: pass}).then((res)=>{
                //call the dispatch function here passing in correct data
                console.log(res.data)
                this.setState({monthWorkout:res.data.monthlyWorkout});
                console.log(this.state.monthWorkout)
                
                //redirects to workout page
            }).catch((error)=>{
                this.setState({failure: error})
                
            })
        }
        getUser(this.state.username, this.state.password)
        
        event.preventDefault();
    }
    //this is a function that is called when username and password are submitted by form,
    //if success pull the user from the database and populate redux store with workouts
    //redirect to the workouts page
    
    render() {
        return (
            <div>
                <form name="login-form" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <label>Username
                        <input name="username" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>Password 
                        <input name="password" type="text" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <div>Surprise Yourself Every Week of Every Month</div>
            </div>
        )
    }
}

export default login
