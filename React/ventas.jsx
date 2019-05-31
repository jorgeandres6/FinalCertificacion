import React from 'react';

class Ventas extends React.Component{
  render() {
    return(
      <div class="container">
        <div class="row">
          <div class="col s8">
            <h1>Carrito de compras</h1>
          </div>
        </div>
        <div class="row">
          <div class="col s8">
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
            </div>

          <div class="col s4">
            <div class="row">
              <div class="col s12">
                <h2>Total: total</h2>
              </div>
            </div>
            <div class="row">
              <div class="col s6">
                <a class="waves-effect waves-light btn">Cancelar</a>
              </div>
              <div class="col s6">
                <a class="waves-effect waves-light btn">Pagar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Ventas;
