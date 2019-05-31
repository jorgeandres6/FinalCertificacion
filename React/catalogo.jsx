import React from 'react';
import { Row, Input, Col, TextInput, Icon } from 'react-materialize';

class Catalogo extends React.Component{
  render() {
    return(
      <div class="contenedor_principal">
        <div class="row" id="barra_titulo">
          <div class="col s6">
            <h2>Catalogo de productos</h2>
          </div>
          <div class="col s4 offset-s7">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">search</i>
                <input type="text" id="icon_prefix" name="search_prod" placeholder="Buscar" />
              </div>
            </div>
          </div>
        </div>

        <div >
          <p>item.nombre</p>
        </div>

        <div class="row">

             <div class="col s6 m3">
               <div class="card">
                <div class="card-image">
                  <img src="assets/images/{{item.template}}" class="responsive-img" />
                  <span class="card-title  blue-grey-text text-darken-4 red lighten-5"><b>item.nombre</b></span>
                </div>
                <div class="card-content">
                  <p>Precio: item.precio</p>
                  <p>Unidades disponibles item.unidades</p>
                </div>
                <div class="card-action">
                  <div class="row">
                    <div class="col s12">
                      <a class="waves-effect waves-light btn-small"><i class="material-icons left">info_outline</i>Ver Mas</a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col s8">
                      <a class="waves-effect waves-light btn-small"><i class="material-icons left">add</i>Agregar</a>
                    </div>
                    <div class="col s4">
                      <input type="number" min="1" max="{{item.unidades}}" step="1" placeholder="Qty" />
                    </div>
                  </div>
                </div>
              </div>
             </div>

        </div>
      </div>

    )
  }
}

export default Catalogo;
