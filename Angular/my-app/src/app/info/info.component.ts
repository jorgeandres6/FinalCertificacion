import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  producto:any;

  constructor(private compras : ComprasService) { }

  ngOnInit() {
    this.producto = this.compras.info;
  }

}
