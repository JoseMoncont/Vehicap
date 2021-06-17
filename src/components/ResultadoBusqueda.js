import React, { Component } from 'react'
import Carro from './Carro';


class ResultadoBusqueda extends Component{

    mostrarCarros = () => {
    
     const carros = this.props.carros;
     if(carros.length === 0 )return ;
     console.log(carros);

     return (

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

            <React.Fragment>
               { this.mostrarCarros() }
               </React.Fragment>
 


        );

        
    }
}
export default ResultadoBusqueda;