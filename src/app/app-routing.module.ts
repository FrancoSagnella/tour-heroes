import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importo el componente de las rutas
import { RouterModule, Routes } from '@angular/router';
//importo el componente de los heroes
import { HeroesComponent } from './heroes/heroes.component';
//importo el componente dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
//importo heroDetails para hacer una ruta
import { HeroDetailsComponent } from './hero-details/hero-details.component';

//en una constante, declaro la ruta al componente de los heroes
//el path es el URL al que voy a entrar (localhost:4200/heroes)
//el component es lo que se crea cuando entro a esa ruta, se va a instanciar un heroecomponent(y mostrar su view)
//es un array donde puedo poner varias rutas
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //con esto hago una ruta default hacia dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //añado una ruta para el componente de heroDetails, pero esta vez tiene un parametro
  { path: 'detail/:id', component: HeroDetailsComponent },
];

@NgModule({
  declarations: [],
  //esta linea configura el sistema de ruteo con las rutas que declare antes
  imports: [RouterModule.forRoot(routes)],
  //esta linea exporta esas rutas , haciendo que pueda acceder desde toda la aplicacion
  exports: [RouterModule]
})
export class AppRoutingModule { }
