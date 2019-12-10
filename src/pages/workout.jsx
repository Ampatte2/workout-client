import React, { Component } from 'react'
import Increment from "./buttons/Increment";
import Decrement from "./buttons/Decrement"


import styled from "styled-components";

const Wrapper = styled.div`
    padding:0 40px 40px 40px;
`

//saying loading if loading, populate workouts from redux store
//if user is not logged in redirect to login page


class workout extends Component {
    constructor(props){
        super(props)
        this.state = {
            day: 0,
            week: 0,
            end: false,
            begin:true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        
        if(event.target.name=== "increment"){
            
            if(this.state.day === 3){
                this.setState({day: 0, week: this.state.week+1})
            }else{
                this.setState({day: this.state.day+1})
                
                
            }
        }

        if(event.target.name=== "decrement"){
            
            if(this.state.day === 0){
                this.setState({day: 3, week: this.state.week-1})
            }else{
                this.setState({day: this.state.day-1})
                
            }
        }
        this.setState((state,props)=>{
            return (state.day===0 && state.week===0) ? {begin:true}: {begin:false};
        })
        this.setState((state,props)=>{
            return (state.day===3 && state.week===3) ? {end:true}: {end:false};
        })
                
    }
    
    
    render() {
        return (
            <div>
                <Wrapper>
                <h1>Hi Name Here are your workouts for the Day!</h1>
                <br/>
                <h2>Today's Workout</h2>
                <div>{this.state.day}{this.state.week}</div>
                <div>
                <Increment end={this.state.end} handleClick={this.handleClick}/>
                </div>
                <div>
                    <Decrement begin={this.state.begin} handleClick={this.handleClick}/>
                </div>
                </Wrapper>
            </div>
        )
    }
}

export default workout