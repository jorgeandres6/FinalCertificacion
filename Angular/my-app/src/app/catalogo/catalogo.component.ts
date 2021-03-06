import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { ComprasService } from '../compras.service';
import { toast } from 'materialize-css';
import { Router } from "@angular/router";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers:[HttpService]
})

export class CatalogoComponent implements OnInit {

  public productos:any = null;

  cantidad:any = [];

  constructor(private httpService : HttpService, private compras : ComprasService, private router:Router) { }

  ngOnInit() {

    this.httpService.getProductos().subscribe(resp => {
      this.productos=resp.body;
      console.log(resp.body);
    });
  }

  @Output() valueChange = new EventEmitter();

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
      this.cantidad[indice]=null;
      this.valueChange.emit(this.compras.productosCarrito.length);
    }
  }

  onSearchChange(searchValue : string ) {
    this.productos.forEach(item =>{
      item.visibilidad = item.nombre.includes(searchValue);
      /*if(item.nombre == searchValue){
        item.visibilidad = false;
      }else{
        item.visibilidad = true;
      }*/
    });
  }

  info(indice){
    this.compras.setInfoProd(this.productos[indice]);
    this.router.navigateByUrl('/main/info');
  }

}
