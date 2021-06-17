import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../assets/css/buscador.css'

const Carro = (props) => {

    const {placa, marca, modelo, empleado, estado, procedimiento, fechaIngreso, fechaSalida, descripcion} = props.carro;

    return(
        <Jumbotron className=" jum-style-respuesta ">

        <div>
           <table className="table col-md-8">
                <thead>
                    <tr>
                    <th scope="col">Placa</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Procedimiento</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Empleado</th>
                    <th scope="col">Ingreso</th>
                    <th scope="col">Salida</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{placa}</th>
                    <td>{marca}</td>
                    <td>{modelo}</td>
                    <td>{estado}</td>
                    <td>{procedimiento}</td>
                    <td>{descripcion}</td>
                    <td>{empleado}</td>
                    <td>{fechaIngreso}</td>
                    <td>{fechaSalida}</td>
                

                    </tr>
                </tbody>
            </table> 

            

        </div>
    </Jumbotron>
    )

}
export default Carro;