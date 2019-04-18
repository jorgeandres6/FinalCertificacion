import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  public productosCarrito:any = [];

  public total = 0;

  constructor() { }

  agregarCarrito(producto) {
      this.productosCarrito.push(producto);
  }

}
