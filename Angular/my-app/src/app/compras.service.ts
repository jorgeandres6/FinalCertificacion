import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  public productosCarrito:any = [];

  public total = 0;

  public info:any;

  constructor() { }

  agregarCarrito(producto) {
      this.productosCarrito.push(producto);
  }

  borrarCarrito(){
    this.productosCarrito = [];
    this.total = 0;
  }

  setInfoProd(producto){
    this.info = producto;
  }

}
