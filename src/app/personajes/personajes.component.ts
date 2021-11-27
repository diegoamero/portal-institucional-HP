import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHPService } from '../api-hp.service';
import { ServicioListaService } from '../servicio-lista.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public respuesta:any
  public personajes:Array<any> = []
  constructor(private route:ActivatedRoute, private ApiHPService:ApiHPService, private ServicioListaService:ServicioListaService) { }

  ngOnInit(): void {
    //Capturando parámetros
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      this.cargarData(params.casaHechiceria)
    })
    this.enviarDatos()
    
    this.personajes = [
      this.respuesta
    ]
  }

  cargarData(casaHechiceria:any){
    this.ApiHPService.get(`http://hp-api.herokuapp.com/api/characters/house/${casaHechiceria}`)
    .subscribe(respuesta => {
        this.respuesta = respuesta
    })
  }

  enviarDatos(){
    this.ServicioListaService.disparadorDeDatos.emit({
      data: this.ServicioListaService.disparadorDeDatos.emit(this.respuesta)
    })
  }

}
