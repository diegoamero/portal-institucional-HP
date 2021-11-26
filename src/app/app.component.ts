import { Component, OnInit } from '@angular/core';
import {ApiHPService} from "./api-hp.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portal';

  constructor(){
  }

  ngOnInit(): void {
  }
}
