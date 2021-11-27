import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ApiHPService } from '../api-hp.service';
import { ServicioListaService } from '../servicio-lista.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  @Input() dataEntrante:any
  @ViewChild('imageTmpl', { static: true }) editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;

  rows = [];
  columns = [];

  ColumnMode = ColumnMode;


  constructor(private ApiHPService:ApiHPService, private ServicioListaService:ServicioListaService) {
  
  }

  ngOnInit(): void {
    this.columns = [
      this.dataEntrante
    ]
  }
}
