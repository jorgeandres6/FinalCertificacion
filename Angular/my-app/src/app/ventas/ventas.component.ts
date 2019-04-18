import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  total = this.compras.total;

  public productos:any = null;

  constructor(private compras : ComprasService, private httpService : HttpService) { }

  ngOnInit() {
    this.productos = this.compras.productosCarrito;
  }

  updateCantidad(){
    this.productos.forEach(item => {
      this.httpService.updateCantidad(item.id,item.cantidad);
    });
  }

}
