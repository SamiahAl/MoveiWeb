import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class Nave extends Component {
    render() {
        return (
            <div>
              
             <Navbar bg="dark" variant="dark">
                   
                <Nav className="mr-auto">
                    <Navbar.Brand>MovieWeb</Navbar.Brand>

                    {/* <Link to = "/home">Home</Link> */}
                <Nav.Link as={Link} to="/home">Home</Nav.Link>

                {/* <Link to = "/allmovies">Allmovies</Link> */}
                <Nav.Link as={Link} to="/allmovies">Allmovies</Nav.Link>

                {/* <Link to = "/about">about</Link> */}
                <Nav.Link as={Link} to="about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="outline-light" > Login </Button>
                    <Button variant="outline-light"  className="ml-2"> Signup </Button>
                </Nav>

            </Navbar>
            </div>
        )
    }
}
