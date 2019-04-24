import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[HttpService]
})
export class LoginComponent implements OnInit {

  constructor(private httpService : HttpService) { }

  public verificacion:any;

  ngOnInit() {

  }

  //submitted = false;

  //onSubmit() { this.submitted = true; }

  login(valor:any){
    this.httpService.getDatos(valor.usuario,valor.psw);
    //console.log(valor);
  }

}
