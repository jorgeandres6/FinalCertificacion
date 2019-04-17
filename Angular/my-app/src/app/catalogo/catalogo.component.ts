import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers:[HttpService]
})
export class CatalogoComponent implements OnInit {

  public productos:any = null;

  constructor(private httpService : HttpService) { }

  ngOnInit() {

    this.httpService.getProductos().subscribe(resp => {
      this.productos=resp.body;
    });

  }

}
