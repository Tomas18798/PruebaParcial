import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './create-jugador.component.html',
  styleUrls: ['./create-jugador.component.css']
})
export class CreateJugadorComponent implements OnInit {

  @Input() title?:string;
  @Input() subtitle?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
