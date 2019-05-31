import React from 'react';
import { Row, Input, Col, TextInput, Icon } from 'react-materialize';

class Login extends React.Component{
  render() {
    return(
      <div className="contenedor_principal">
        <div className="container">
          <Row>
            <Col s={4} offset="s4">
              <h1>LOGIN</h1>
            </Col>
          </Row>

          <form>
            <Row>
                <Col s={4} offset="s4">
                  <TextInput label="Usuario" validate required/>
                </Col>
            </Row>

            <Row>
                <Col s={4} offset="s4">
                  <TextInput label="Password" password validate required/>
                </Col>
            </Row>

            <Row>
                <Col s={4} offset="s4">
                  <button waves="light" type="submit">Ingresar
                      <Icon right>send</Icon>
                  </button>
                </Col>
            </Row>
          </form>

        </div>
      </div>

    )
  }
}

export default Login;
