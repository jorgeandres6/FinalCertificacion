import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  public productosCarrito:any = [];

  constructor() { }

  agregarCarrito(producto) {
      this.productosCarrito.push(producto);
      console.log(this.productosCarrito);
  }

}
