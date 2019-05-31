import React from 'react';

class Info extends React.Component{
  render() {
    return(
      <div class="container">
        <div class="row">
          <div class="col s6">
            <img class="responsive-img" src="assets/images/{{producto.template}}" />
          </div>
          <div class="row">
            <div class="col s12">
              Nombre producto: producto.nombre
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              Precio: producto.precio | currency
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              Unidades disponibles producto.unidades
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <a class="waves-effect waves-light btn-large"><i class="material-icons left">arrow_back</i>Regresar</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Info;
