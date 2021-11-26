import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHPService } from '../api-hp.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  public respuesta:any
  constructor(private route:ActivatedRoute, private ApiHPService:ApiHPService) { }

  ngOnInit(): void {
    this.cargarData()
  }

  cargarData(){
    this.ApiHPService.get("http://hp-api.herokuapp.com/api/characters/staff")
    .subscribe(respuesta => {
        this.respuesta = respuesta
    })
  }

}
