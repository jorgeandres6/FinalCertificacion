import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VentasComponent } from './ventas/ventas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent,
    children: [
      {path:'', redirectTo: 'catalogo', pathMatch: 'full'},
      {path:'catalogo', component: CatalogoComponent},
      {path:'ventas', component: VentasComponent}
    ]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
