import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroe';//aca voy a ir importando todas las interfaces o clases que vaya a usar mi componente
//import { HEROES } from '../mock-heroes';//importo la constante con la lista de heroes
import { HeroService } from '../hero.service';//importo la clase con el servicio que va a recuperar la lista de heroes
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //esta funcion se ejecuta despues del constructor, esta mejor hacer cosas
  //que tienen que ver con la creacion dell objeto aca que en el constructor
  ngOnInit(): void {
    //voy a llamar a esta funcion y traer todo el array de los heroes aca
    this.getHeroes();
  }

}
