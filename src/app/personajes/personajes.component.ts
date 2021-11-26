import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHPService } from '../api-hp.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public respuesta:any
  
  constructor(private route:ActivatedRoute, private ApiHPService:ApiHPService) { }

  ngOnInit(): void {
    //Capturando parámetros
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      this.cargarData(params.casaHechiceria)
    })
  }

  cargarData(casaHechiceria:any){
    this.ApiHPService.get(`http://hp-api.herokuapp.com/api/characters/house/${casaHechiceria}`)
    .subscribe(respuesta => {
        this.respuesta = respuesta
    })
  }

}
