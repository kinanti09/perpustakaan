import React,{Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import {Link} from 'react-router-dom';
    import './Navbar.css'
export default class NavBar extends Component{
    render(){
        return(
            <div className="nav">

                <Navbar light expand="md">
                <NavbarBrand tag={Link} to="/"><p>Perpustakaan</p></NavbarBrand>
                <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/author"><p>Authors</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/book"><p>Book</p></NavLink>
              </NavItem>
            </Nav>
                </Navbar>

            </div>
        )
    }
}