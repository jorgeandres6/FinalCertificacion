import { Component, OnInit } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[HttpService]
})
export class MainComponent implements OnInit {

  constructor(private httpService : HttpService) { }

  ngOnInit() {
    this.httpService.getProductos().subscribe(resp => console.log(resp.body))
  }

}
