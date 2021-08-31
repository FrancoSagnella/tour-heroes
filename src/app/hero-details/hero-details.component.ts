import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroe';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

//Ahora ya no 'hereda' de heroComponent, sino que vengo desde una ruta
//por eso agrego unpos para de servicios para poder, obtener el listado, obtener el id que obtuve en la ruta
//y buscar ese id en el listado para mostrarlo
export class HeroDetailsComponent implements OnInit {

  @Input() hero? : Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  //metodo para volver a la ruta anterior
  goBack(): void {
    //este location, que lo instance en el constructor
    //guarda la ruta en donde estoy, y con el metodo back vuelvo a la ruta de donde vine
    this.location.back();
  }
}
