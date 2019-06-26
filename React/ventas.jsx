import React from 'react';
import { Row, Input, Col, TextInput, Icon, Button } from 'react-materialize';

class Ventas extends React.Component{
  render() {
    return(
      <div class="container">
        <Row>
          <Col s={8}>
            <h1>Carrito de compras</h1>
          </Col>
        </Row>
        <Row>
          <Col s={8}>
            <div class="card horizontal">
              <div class="card-image">
                <img src="assets/images/{{item.template}}" class="responsive-img" />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h3>item.nombre</h3>
                  <p></p>
                  <p>Unidades: item.cantidad</p>
                  <p>Subtotal: item.subtotal</p>
                </div>
              </div>
            </div>
          </Col>

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
                <Button waves="light">Pagar</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Ventas;
