import React, { Component } from 'react';
 import Jumbotron from 'react-bootstrap/Jumbotron';
 import '../assets/css/buscador.css'

class Buscador extends Component {


    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        //Tomamos el valor del Input
        const termino = this.busquedaRef.current.value;
        //lo enviamos al componente principal
        this.props.datosBusqueda(termino);
        

    }

    render(){
        return ( 

           <Jumbotron className=" jum-style">
               <h1 className="texto-buscador">Encuentra el Vehículo</h1>
               <form onSubmit={this.obtenerDatos}>
                   <div className="row" >
                       <div className="form-group col-md-8">
                           <input  ref={this.busquedaRef} type="text" className="form-control form-control-lg busqueda-place" 
                           placeholder="Buscar por número de placa">
                           </input>
                       </div>
                       <div className="form-group col-md-4">
                           <input type="submit" className="btn btn-lg boton-pur btn-block" value="Buscar">
                           </input>

                       </div>
                   </div>
               </form>
               

           </Jumbotron>
        );
    }

}
export default Buscador;