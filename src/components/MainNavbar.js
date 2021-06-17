import React, { Component } from 'react';
import Logo from '../assets/img/logow.png'
import '../assets/css/navbar.css'
import { NavDropdown } from 'react-bootstrap';


class MainNavbar extends Component{
    render(){

        return (
                
            

            <nav className="navbar navbar-expand-lg nav-j ">
                <div className="container-fluid">
                <a className="navbar-brand mai-1" href="/"><img src={Logo} alt="" width="30" height="30" className="d-inline-block align-text-top"></img>{"  "}<b>VEHI</b>CAP</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto mar-1">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/carros">Carros</a>
                    </li>
                    <NavDropdown title="Salir" id="basic-nav-dropdown" className="">
                    
                        <NavDropdown.Item href="#action/3.1">Cuenta</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Configuración</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/login">Cerrar Sesión</NavDropdown.Item>
                    </NavDropdown>
                    </ul>
                </div>
                </div>
          </nav>

    
        
            
        );
    }
}
export default MainNavbar;