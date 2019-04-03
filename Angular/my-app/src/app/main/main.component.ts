import { Component, OnInit } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component'
import { VentasComponent } from '../ventas/ventas.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
