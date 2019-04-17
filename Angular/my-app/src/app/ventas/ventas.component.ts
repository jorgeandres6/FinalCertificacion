import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public productos:any = null;

  constructor(private compras : ComprasService) { }

  ngOnInit() {
    this.productos = this.compras.productosCarrito;
    console.log(this.compras.productosCarrito);
  }

}
