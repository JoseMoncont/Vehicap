import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CarList from '../components/CarList';
import MainNavbar from '../components/MainNavbar';



function Carros() {


  return (

    <>
    <MainNavbar/>
    <CarList/>
    
    </>
    
  );
}


export default Carros;