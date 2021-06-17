import React, { Component } from 'react'
import Carro from './Carro';


class ResultadoBusqueda extends Component{

    mostrarCarros = () => {
    //Validamos que los datos no estén vacios
     const carros = this.props.carros;
     if(carros.length === 0 )return ;
     console.log(carros);

     return (
//Retornamos la respuesta que envía la API
    <React.Fragment>
        <div className="col-12 p-5 row">
            { carros.map( carro => (
               <Carro 
               key={carro._id}
               carro={ carro }/> 
            ))}

        </div>
    </React.Fragment>
  )

    }

    render() {

        return (
//Renderizamos los resultados
            <React.Fragment>
               { this.mostrarCarros() }
               </React.Fragment>
 


        );

        
    }
}
export default ResultadoBusqueda;