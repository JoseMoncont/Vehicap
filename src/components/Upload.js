import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/buscador.css'
import { Jumbotron } from 'react-bootstrap';
import csv from '../assets/img/csv.png'



function Upload() {

  const [archivos, setArchivos]=useState(null);

  const subirArchivos=e=>{
      setArchivos(e);
  }
  const insertarArchivos=async()=>{
      const f = new FormData();

      for (let index = 0; index < archivos.length; index++) {
          f.append("files", archivos[index]);
      }

      await axios.post("http://vehicap-api.azurewebsites.net/upload", f)
      .then(response =>{
        console.log(response.data);

      }).catch(error=>{
          console.log(error);
      })
  }


  return (


    <Jumbotron className=" jum-style-upload">
        
            <div className="card tamaño-card sm-2">
                 <img src={csv} className="card-img-top size-imagen" alt="..."/>
                    <div className="card-body text-mont">
                    <h5 className="card-title">Subir Archivo</h5>
                     <p className="card-text">En esta sección usted debe subir el archivo .csv con la información requerida.</p>
                         <form >
                            <div className="row" >
                                <div className="form-group col-md-8">
                                    <input  type="file" name="files" multiple onChange={(e)=>subirArchivos(e.target.files)} className="form-control form-control-lg subir-place">
                                    </input>
                                </div>
                                <div className="form-group col-md-4">
                                    <button className="btn btn-lg boton-pur2 btn-block" value="Buscar" onChange={()=>insertarArchivos()} > Subir
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
             </div>
</Jumbotron>
    
  );
}


export default Upload;