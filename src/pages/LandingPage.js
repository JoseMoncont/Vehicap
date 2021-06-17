import React, { Fragment } from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import hero9 from '../assets/img/hero-5.jpg';
import logo from '../assets/img/logow.png';
import '../assets/css/buscador.css'

const Landing = () => {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-premium-dark min-vh-100 text-landing">
        <div className="flex-grow-1 w-100  align-items-center">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: {hero9} }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-3" />
          <div className="bg-composed-wrapper--bg bg-red-lights opacity-1" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
          <div className="text-center">
                    <div className="px-4 px-sm-0 text-white mt-4 massimo">
                      <img src={logo} alt="logo" className="logo-landing"/>
                      <h1 className="display-2 mb-5 font-weight mont">
                        <b>VEHI</b>CAP
                      </h1>
                      <p className="font-size-xl text-white mb-3 mont">
                        Bienvenido a VEHICAP, la plataforma en la que puedes monitorear y controlar las actividades de tu taller automotriz
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          to="/login"
                          component={Link}
                          size="large"
                          color="primary"
                          variant="contained"
                          className="m-2 py-3 px-5"
                          title="Planning Car">
                          <span className="btn-wrapper--label">Ingresar</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;