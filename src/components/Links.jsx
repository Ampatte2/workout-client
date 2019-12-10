import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
    className: " navbar-collapse",
})``

const List = styled.div.attrs({
    className: "nav-bar mr-auto",   
})``

const Item = styled.div.attrs({
    className: "navbar-collapse",
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/workout" className="navbar-brand">
                    WorkoutMixer
                </Link>
                <Collapse>
                <List>
                    <Item>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/register" className="nav-link">
                            Register
                        </Link>
                    </Item>
                </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
