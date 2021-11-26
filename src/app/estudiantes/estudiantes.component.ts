import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ApiHPService } from '../api-hp.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent implements OnInit {
  public respuesta:any
  constructor(private route:ActivatedRoute, private ApiHPService:ApiHPService) { }

  ngOnInit(): void {
    this.cargarData()
  }

  cargarData(){
    this.ApiHPService.get("http://hp-api.herokuapp.com/api/characters/students")
    .subscribe(respuesta => {
        this.respuesta = respuesta
    })
  }
}
