import React from 'react';
import { Row, Input, Col, TextInput, Icon, Button} from 'react-materialize';

class Info extends React.Component{

  constructor(){
    super ();
    this.state = {producto:JSON.parse(sessionStorage.getItem('info'))};
  }

  back(event){
    this.props.history.push('/principal');
  }

  render() {

    return(
      <div class="container">
        <Row>
          <Col s={6}>
            <img className="responsive-img" src={require(`./images/${this.state.producto.template}`)} />
          </Col>
          <Row>
            <Col s={12}>
              Nombre producto: {this.state.producto.nombre}
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              Precio: $ {this.state.producto.precio}
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              Unidades disponibles: {this.state.producto.unidades}
            </Col>
          </Row>
        </Row>
        <Row>
          <Col s={6}>
            <Button waves="light" onClick={(e) => this.back(e)}>Regresar
                <Icon left>arrow_back</Icon>
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Info;
