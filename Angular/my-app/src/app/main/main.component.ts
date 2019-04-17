import { Component, OnInit } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ComprasService]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
