import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  getDatos (){
    this.httpClient.get('https://basededatos-2127f.firebaseio.com/usuarios/usuario1/password.json')
    .subscribe(response => console.log(response))
  }

  getProductos (){
    return this.httpClient.get('https://basededatos-2127f.firebaseio.com/productos/.json',{ observe: 'response' })
  }

  updateCantidad (index,cantidad){
    this.httpClient.patch("https://basededatos-2127f.firebaseio.com/productos/"+index+"/.json",
    {
      "unidades" : cantidad
    }).subscribe(
      data =>{
        console.log("Actualizacion exitosa", data);
      },
      error =>{
        console.log("Error", error);
      }
    );
  }

}
