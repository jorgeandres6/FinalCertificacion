import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ComprasService } from '../compras.service';
import { toast } from 'materialize-css';

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
    if (isNaN(this.cantidad[indice]) || this.cantidad[indice]<1){
      toast({
        html: '<i class="material-icons">priority_high</i> Elija por lo menos 1 elemento antes de añadirlo',
        displayLength: 1000
      })
    }
    else if(this.cantidad[indice]>this.productos[indice].unidades){
      toast({
        html: '<i class="material-icons">sentiment_very_dissatisfied</i> No hay tanta existencia de este articulo',
        displayLength: 1000
      })
    }
    else{
      this.productos[indice].cantidad = this.cantidad[indice];
      this.productos[indice].subtotal = this.productos[indice].precio * this.productos[indice].cantidad;
      this.productos[indice].id=indice;
      this.compras.agregarCarrito(this.productos[indice]);
      this.compras.total=this.compras.total+this.productos[indice].subtotal;
      toast({
        html: '<i class="material-icons">check_circle</i> Articulo añadido al carrito',
        displayLength: 1000
      })
    }
  }

}
