import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioListaService {
  @Output() disparadorDeDatos: EventEmitter<any> = new EventEmitter()
  constructor() { }
}
