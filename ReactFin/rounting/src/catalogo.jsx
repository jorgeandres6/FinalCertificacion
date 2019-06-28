import React from 'react';
import { Row, Input, Col, TextInput, Icon, Card,  Button } from 'react-materialize';
import { getProductos } from './utils/httpService';
import { toast } from 'materialize-css';

class Catalogo extends React.Component{

  constructor(){
    super ();
    this.state = {productos:[], carrito:[], cantidad:[], cantidad2:JSON.parse(sessionStorage.getItem('cantidad'))};
  }
  //JSON.parse(sessionStorage.getItem('cantidad'))
  //JSON.parse(sessionStorage.getItem('carrito'))

  handleChange(event, i) {
    event.preventDefault();
    //let carritoAux = this.state.carrito;
    let carritoAux = [];
    if (sessionStorage.getItem('carrito') == null){
      carritoAux = this.state.carrito;
    }
    else {
      carritoAux = JSON.parse(sessionStorage.getItem('carrito'));
    }
    carritoAux.push(this.state.productos[i]);
    //this.setState({carrito:carritoAux});
    sessionStorage.setItem('carrito',JSON.stringify(carritoAux))
    console.log(JSON.parse(sessionStorage.getItem('carrito')))
    sessionStorage.setItem('cantidad',JSON.stringify(this.state.cantidad2))
    console.log(JSON.parse(sessionStorage.getItem('cantidad')))
    //sessionStorage.setItem('productos',);
  }

  handleChangeN(event,i) {
    let cantidadAux = [];
    if (sessionStorage.getItem('cantidad') != null){
      cantidadAux=this.state.cantidad2;
    }
    cantidadAux.push(event.target.value);
    this.setState({cantidad2:cantidadAux});
    //sessionStorage.setItem('productos',);
  }

  componentWillMount (){
    getProductos().then(response => {
      this.setState({productos:response.data});
    });
  }

  agregarProducto(indice){
    if (isNaN(this.state.cantidad.indice) || this.state.cantidad.indice<1){
      toast({
        html: '<i class="material-icons">priority_high</i> Elija por lo menos 1 elemento antes de añadirlo',
        displayLength: 1000
      })
    }
    else if(this.state.cantidad.indice>this.state.productos[indice].unidades){
      toast({
        html: '<i class="material-icons">sentiment_very_dissatisfied</i> No hay tanta existencia de este articulo',
        displayLength: 1000
      })
    }
    else{
      this.state.carrito[indice].cantidad = this.state.cantidad.indice;
      this.state.carrito[indice].subtotal = this.state.productos[indice].precio * this.state.productos[indice].cantidad;
      this.state.carrito[indice].id=indice;
      console.log(this.state.carrito)
      //this.agregarCarrito(this.productos[indice]);
      //this.compras.total=this.compras.total+this.productos[indice].subtotal;
      toast({
        html: '<i class="material-icons">check_circle</i> Articulo añadido al carrito',
        displayLength: 1000
      })
      this.state.cantidad.indice=null;
      //this.valueChange.emit(this.compras.productosCarrito.length);
    }
  }

  render() {

    let catalogoProd = this.state.productos.map((item,i) => {

      return(
        <div key={i}>
               <Col s={6} m={4}>
                 <Card>
                  <div className="card-image">
                    <img src={require(`./images/${item.template}`)} className="responsive-img" />
                    <span className="card-title  blue-grey-text text-darken-4 red lighten-5"><b>{item.nombre}</b></span>
                  </div>
                  <div className="card-content">
                    <p>Precio: {item.precio}</p>
                    <p>Unidades disponibles {item.unidades}</p>
                  </div>
                  <div className="card-action">
                    <Row>
                      <Col s={12}>
                        <Button waves="light">Ver Mas
                            <Icon right>info_outline</Icon>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col s={8}>
                        <Button waves="light" onClick={(e) => this.handleChange(e,i)}>Agregar
                            <Icon right>add</Icon>
                        </Button>
                      </Col>
                      <Col s={4}>
                        <TextInput type="number" min="1" max={item.unidades} step="1" placeholder="Qty" value={this.state.cantidad[i]} value={this.state.cantidad[i]} onChange={(e) => this.handleChangeN(e,i)}/>
                      </Col>
                    </Row>
                  </div>
                </Card>
               </Col>
        </div>
      );
    })

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
        <Row>
        {catalogoProd}
        </Row>
      </div>

    )
  }
}

export default Catalogo;
