import React from 'react';
import { Row, Input, Col, TextInput, Icon, Button } from 'react-materialize';
import { updateCantidad } from './utils/httpService';

class Ventas extends React.Component{

  constructor(){
    super ();
    this.state = {cantidad:JSON.parse(sessionStorage.getItem('cantidad')),carrito:[],total:0};
  }

  pagar(){
    this.state.carrito.map((item,i) => {
      let nuevaCantidad = item.unidades - this.state.cantidad[i];
      updateCantidad(i,nuevaCantidad);
    });
    this.vaciar();
  }

  cancelar(){
    this.vaciar();
  }

  vaciar(){
    this.setState({cantidad:[]});
    sessionStorage.removeItem('carrito');
    sessionStorage.removeItem('cantidad');
    this.setState({carrito:[]});
    this.setState({total:0});
  }

  componentWillMount(){
    if (sessionStorage.getItem('carrito') != null){
        let carritoAux = JSON.parse(sessionStorage.getItem('carrito'));
        let total = 0;
        carritoAux.map((item,i) => {
          item.subtotal = item.precio * this.state.cantidad[i];
          total = total + item.subtotal;
        })
        this.setState({carrito:carritoAux});
        this.setState({total:total});
    }
  }

  render() {

    let ventaslist = this.state.carrito.map((item,i) => {
      return(
        <Col s={8}>
          <div class="card horizontal">
            <div class="card-image">
              <img src={require(`./images/${item.template}`)} className="responsive-img" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h3>{item.nombre}</h3>
                <p></p>
                <p>Unidades: {this.state.cantidad[i]}</p>
                <p>Subtotal: {item.subtotal}</p>
              </div>
            </div>
          </div>
        </Col>
      )
    })

    return(
      <div className="container">
        <Row>
          <Col s={8}>
            <h1>Carrito de compras</h1>
          </Col>
        </Row>
        <Row>
          {ventaslist}
          <Col s={4}>
            <Row>
              <Col s={12}>
                <h2>Total: ${this.state.total}</h2>
              </Col>
            </Row>
            <Row>
              <Col s={6}>
                <Button waves="light" onClick={this.cancelar.bind(this)}>Cancelar</Button>
              </Col>
              <Col s={6}>
                <Button waves="light" onClick={this.pagar.bind(this)}>Pagar</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Ventas;
