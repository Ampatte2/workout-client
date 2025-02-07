import React, { Component } from 'react'
import styled from "styled-components"

import Logo from "./Logo"
import Links from "./Links"
const Container = styled.div.attrs({
    className: "container",
})``
const Nav = styled.nav.attrs({
    className: "navbar navbar-expand-1g navbar-dark bg-dark",
})`
    margin-bottom:20px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
