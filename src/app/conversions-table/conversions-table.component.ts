import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hcl-conversions-table',
  templateUrl: './conversions-table.component.html',
  styleUrls: ['./conversions-table.component.scss']
})
export class ConversionsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notAvailable(): void {
    alert('Faltando especificar o fator de conversão.');
  }

}
