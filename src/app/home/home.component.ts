import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public buttons:Array<any> = []
  constructor() { }

  ngOnInit(): void {
    this.buttons = [
      {
        title: "Estudiantes",
        url: "/estudiantes"
      },
      {
        title: "Profesores",
        url: "/profesores"
      }
    ]
  }
}
