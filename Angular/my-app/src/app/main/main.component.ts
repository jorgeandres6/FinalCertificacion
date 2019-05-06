import { Component, OnInit } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ComprasService } from '../compras.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ComprasService]
})
export class MainComponent implements OnInit {

  constructor(private router:Router, private compras : ComprasService) { }

  totalCarrito = this.compras.productosCarrito.length;

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  cantidadCarrito(cantidad){
    this.totalCarrito=cantidad;
  }

}
