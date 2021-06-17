import React, { Component } from 'react';
import Buscador from '../components/Buscador';
import MainNavbar from '../components/MainNavbar';
import Upload from '../components/Upload';
import ResultadoBusqueda from '../components/ResultadoBusqueda';




class Principal extends Component{

    state = {
        termino: '',
        carros : []
    }

consultarAPI = () => {
    const termino = this.state.termino;
    const url = `https://planning-car-api.azurewebsites.net/jobs/${termino}`;

    //console.log(url)
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ carros : resultado.data}))
}

  datosBusqueda = (termino) => {
    this.setState({termino}, () => {this.consultarAPI();})

  }
    render(){

        return (
            
            <>
                <div className="App">
                 <MainNavbar/>
                <Buscador  datosBusqueda={this.datosBusqueda}/>
                <ResultadoBusqueda carros={this.state.carros}/> 
                
                <Upload/>
                
                </div>
            </>
        
            
        );
    }
}
export default Principal;