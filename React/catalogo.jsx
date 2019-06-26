import React from 'react';
import { Row, Input, Col, TextInput, Icon, Card } from 'react-materialize';

class Catalogo extends React.Component{
  render() {
    return(
      <div className="contenedor_principal">
        <Row id="barra_titulo">
          <Col s={6}>
            <h2>Catalogo de productos</h2>
          </Col>
          <Col s={4} offset="s7">
            <Row>
              <TextInput icon="search" label="Buscar" />
            </Row>
          </Col>
        </Row>

        <div >
          <p>item.nombre</p>
        </div>

        <Row>
             <Col s={6} m={4}>
               <Card>
                <div className="card-image">
                  <img src="images/aguacate.jpg" className="responsive-img" />
                  <span className="card-title  blue-grey-text text-darken-4 red lighten-5"><b>item.nombre</b></span>
                </div>
                <div className="card-content">
                  <p>Precio: item.precio</p>
                  <p>Unidades disponibles item.unidades</p>
                </div>
                <div className="card-action">
                  <Row>
                    <Col s={12}>
                      <button waves="light">Ver Mas
                          <Icon right>info_outline</Icon>
                      </button>
                    </Col>
                  </Row>
                  <Row>
                    <Col s={8}>
                      <button waves="light">Agregar
                          <Icon right>add</Icon>
                      </button>
                    </Col>
                    <Col s={4}>
                      <TextInput type="number" min="1" max="{{item.unidades}}" step="1" placeholder="Qty" />
                    </Col>
                  </Row>
                </div>
              </Card>
             </Col>

        </Row>
      </div>

    )
  }
}

export default Catalogo;
