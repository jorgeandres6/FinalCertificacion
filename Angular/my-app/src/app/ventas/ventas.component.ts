import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { HttpService } from '../http.service';
import { toast } from 'materialize-css';

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

  pagar(){
    this.productos.forEach(item => {
      this.httpService.getItem(item.id).subscribe(resp => {
        let cantidadFinal:number;
        cantidadFinal = Number(resp.body) - item.cantidad;
        if (cantidadFinal>=0){
          this.httpService.updateCantidad(item.id,cantidadFinal);

        }
      });
    });
    this.productos = null;
    this.compras.borrarCarrito();
    this.total = 0;
    toast({
      html: '<i class="material-icons">check_circle</i> Compra realizada con exito! Gracias por su compra',
      displayLength: 1000
    })
  }
}
