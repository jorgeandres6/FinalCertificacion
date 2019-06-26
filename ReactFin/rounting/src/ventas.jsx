import React from 'react';
import { Row, Input, Col, TextInput, Icon, Button } from 'react-materialize';



class Ventas extends React.Component{

  constructor(){
    super ();
    this.state = {cantidad:JSON.parse(sessionStorage.getItem('cantidad'))};
  }

  pagar(){
    this.setState({cantidad:[0]});
    sessionStorage.removeItem('carrito');
    sessionStorage.removeItem('cantidad');
  }

  render() {

    let ventaslist = JSON.parse(sessionStorage.getItem('carrito')).map((item,i) => {
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
                <h2>Total: total</h2>
              </Col>
            </Row>
            <Row>
              <Col s={6}>
                <Button waves="light">Cancelar</Button>
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
