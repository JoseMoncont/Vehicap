import { Fragment, Component } from 'react';
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input,
  Form
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/table.css'
import { Jumbotron } from 'react-bootstrap';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'



class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      form: {
        placa: '',
        marca: '',
        modelo: '',
        empleado: '',
        fechaIngreso: '',
        fechaSalida: '',
        estado: '',
        descripcion: '',
        procedimiento: '',
        created_date: {
          type: Date,
          default: Date.now
        }
      },
      isLoaded: false
    };
  }
  //Llamado a la API
  componentDidMount() {
    fetch('https://planning-car-api.azurewebsites.net/cars')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json.data
        });
      });
  }
  // Mostrar la Ventana Modal para Actualizar Registros
  mostrarModalActualizar = car => {
    this.setState({
      form: car,
      modalActualizar: true
    });
  };
  //Cerrar la anterior ventana modal
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };
  //Ventana Modal para insertar un nuevo registro
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true
    });
  };
  //Cerrar la anterior Ventana Modal
  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };
  //Editar un registro
  editar = car => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map(registro => {
      if (car._id === registro._id) {
        arreglo[contador].placa = car.placa;
        arreglo[contador].marca = car.marca;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };
  //Eliminar un Registro + Ventana de confirmación windows
  eliminar = car => {
    var opcion = window.confirm(
      '¿Estás Seguro que deseas Eliminar el carro ' +
        car.marca +
        ' de placas ' +
        car.placa +
        '?'
    );
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map(registro => {
        if (car._id === registro._id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };
  //Funcion para insertar un nuevo registro
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo._id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };
  //Cambio de Estado
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  //Renderización de los datos
  render() {
    var { isLoaded, data } = this.state;
    if (!isLoaded) {
      return <div>Cargando...</div>;
    } else {
      return (
        //Tabla + Botones + Formularios de Ventanas Modales
        <Fragment>
          <Jumbotron> 
          <Button color="success insertar " onClick={() => this.mostrarModalInsertar()}>
              Insertar Carro
            </Button>
          <br></br>

          <TableContainer className="mb-4" component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Placa</TableCell>
                  <TableCell align="right">Marca</TableCell>
                  <TableCell align="right">Modelo</TableCell>
                  <TableCell align="right">Descripcion</TableCell>
                  <TableCell align="right">Procedimiento</TableCell>
                  <TableCell align="right">Estado</TableCell>

                  <TableCell align="right">Empleado</TableCell>
                  <TableCell align="right">Ingreso</TableCell>
                  <TableCell align="right">Salida</TableCell>
                  <TableCell align="right">Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(car => (
                  <TableRow key={car._id}>
                    <TableCell component="th" scope="row">
                      {car.placa}
                    </TableCell>
                    <TableCell align="right">{car.marca}</TableCell>
                    <TableCell align="right">{car.modelo}</TableCell>
                    <TableCell align="right">{car.descripcion}</TableCell>
                    <TableCell align="right">{car.procedimiento}</TableCell>
                    <TableCell align="right">
                      <span className="btn-pill m-1 badge badge-primary">
                        {car.estado}
                      </span>
                    </TableCell>
                    <TableCell align="right">{car.empleado}</TableCell>
                    <TableCell align="right">{car.fechaIngreso}</TableCell>
                    <TableCell align="right">{car.fechaSalida}</TableCell>
                    <TableCell align="right">
                      <Button color="primary">
                        <FontAwesomeIcon
                          icon={ faEdit }
                          className="font-size-s"
                          onClick={() => this.mostrarModalActualizar(car)}
                        />
                      </Button>
                      {'   '}
                      <Button color="danger">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="font-size-s"
                          onClick={() => this.eliminar(car)}
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
              <br></br>
              <div>
                <h3>Editar Registro</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>Id:</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form._id}
                />
              </FormGroup>
              <FormGroup>
                <label>Placa: </label>
                <input
                  className="form-control"
                  name="placa"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.placa}
                />
              </FormGroup>
              <FormGroup>
                <label>Marca</label>
                <input
                  className="form-control"
                  name="marca"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.marca}
                />
              </FormGroup>
              <FormGroup>
                <label>Modelo</label>
                <input
                  className="form-control"
                  name="modelo"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.modelo}
                />
              </FormGroup>
              <FormGroup>
                <label>Empleado</label>
                <input
                  className="form-control"
                  name="empleado"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.empleado}
                />
              </FormGroup>
              <FormGroup>
                <label>Descripción</label>
                <input
                  className="form-control"
                  name="descripcion"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.descripción}
                />
              </FormGroup>
              <FormGroup>
                <label>Procedimiento</label>
                <input
                  className="form-control"
                  name="procedimiento"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.procedimiento}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Fecha Ingreso: </Label>
                <Input
                  type="date"
                  name="fechaIngreso"
                  id="exampleDate"
                  placeholder="date placeholder"
                  onChange={this.handleChange}
                  value={this.state.form.fechaIngreso}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Fecha Salida: </Label>
                <Input
                  type="date"
                  name="fechaSalida"
                  id="exampleDate"
                  placeholder="date placeholder"
                  onChange={this.handleChange}
                  value={this.state.form.fechaSalida}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}>
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalInsertar} size="lg">
            <br></br>
            <ModalHeader>
              <div>
                <h3>Insertar Nuevo Carro</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <Form inline>
                <FormGroup>
                  <label>Id: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length}
                  />
                </FormGroup>

                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label className="mr-sm-2"> Placa: </Label>
                  <Input
                    className="form-control"
                    name="placa"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label className="mr-sm-2">Marca: </Label>
                  <Input
                    className="form-control"
                    name="marca"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Form>
              <FormGroup>
                <label>Modelo: </label>
                <input
                  className="form-control"
                  name="modelo"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Descripción: </label>
                <input
                  className="form-control"
                  name="descripcion"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Procedimiento: </label>
                <input
                  className="form-control"
                  name="procedimiento"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Estado</Label>
                <Input
                  type="select"
                  name="estado"
                  id="exampleSelect"
                  onChange={this.handleChange}>
                  <option>Seleccione</option>
                  <option>Abierto</option>
                  <option>Cerrado</option>
                  <option>Sin Determinar</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <label>Empleado: </label>
                <input
                  className="form-control"
                  name="empleado"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Fecha Ingreso: </Label>
                <Input
                  type="date"
                  name="fechaIngreso"
                  id="exampleDate"
                  placeholder="date placeholder"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Fecha Salida: </Label>
                <Input
                  type="date"
                  name="fechaSalida"
                  id="exampleDate"
                  placeholder="date placeholder"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={() => this.insertar()}>
                Insertar
              </Button>
              <Button
                className="btn btn-danger"
                color="white"
                onClick={() => this.cerrarModalInsertar()}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
          </Jumbotron>
        </Fragment>
      );
    }
  }
}
export default CarList;
