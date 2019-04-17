import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  total = 0;

  public productos:any = null;

  constructor(private compras : ComprasService) { }

  ngOnInit() {
    this.productos = this.compras.productosCarrito;
    this.total=+this.productos[indice].subtotal;
  }

}
