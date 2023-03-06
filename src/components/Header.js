import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const activeStyle = {
        color : "#fff"
    }
  return (
    <div className='header'>
        <Navbar expand = "lg" fixed = "top">
            <Container>
                <Navbar.Brand>Umar Tahir</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ml-auto'>
                        <NavLink to ="/" className="nav-links" style = {({isActive}) =>(isActive ? activeStyle : undefined)}>Home</NavLink>
                        <NavLink to ="/projects" className="nav-links" style = {({isActive}) =>(isActive ? activeStyle : undefined)}>Projects</NavLink>
                        <NavLink to ="/services" className="nav-links" style = {({isActive}) =>(isActive ? activeStyle : undefined)}>Services</NavLink>
                        <NavLink to ="/about" className="nav-links" style = {({isActive}) =>(isActive ? activeStyle : undefined)}>About</NavLink>
                        <NavLink to ="/contact" className="nav-links" style = {({isActive}) =>(isActive ? activeStyle : undefined)}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default Header