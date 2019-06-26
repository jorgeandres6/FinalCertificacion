import React from 'react';
import { Row, Input, Col, TextInput, Icon, Button} from 'react-materialize';

class Info extends React.Component{
  render() {
    return(
      <div class="container">
        <Row>
          <Col s={6}>
            <img class="responsive-img" src="assets/images/{{producto.template}}" />
          </Col>
          <Row>
            <Col s={12}>
              Nombre producto: producto.nombre
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              Precio: producto.precio | currency
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              Unidades disponibles producto.unidades
            </Col>
          </Row>
        </Row>
        <Row>
          <Col s={6}>
            <Button waves="light" type="submit">Regresar
                <Icon left>arrow_back</Icon>
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Info;
