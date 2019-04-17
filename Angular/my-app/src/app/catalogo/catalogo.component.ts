import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers:[HttpService]
})

export class CatalogoComponent implements OnInit {

  public productos:any = null;

  cantidad:any = [];

  constructor(private httpService : HttpService, private compras : ComprasService) { }

  ngOnInit() {

    this.httpService.getProductos().subscribe(resp => {
      this.productos=resp.body;
    });
  }

  agregarProducto(indice){
    this.productos[indice].cantidad = this.cantidad[indice];
    this.productos[indice].subtotal = this.productos[indice].precio * this.productos[indice].cantidad;
    this.compras.agregarCarrito(this.productos[indice]);
  }

}
