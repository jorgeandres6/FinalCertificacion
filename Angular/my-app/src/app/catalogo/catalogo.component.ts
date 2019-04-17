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

  constructor(private httpService : HttpService, private compras : ComprasService) { }

  ngOnInit() {

    this.httpService.getProductos().subscribe(resp => {
      this.productos=resp.body;
    });
  }

  agregarProducto(indice){
    this.compras.agregarCarrito(this.productos[indice]);
  }

}
