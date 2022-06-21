import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Jugador } from 'src/app/Interfaces/Jugador';
import { JugadorProvider } from 'src/app/Services/JugadorProvider';

@Component({
  selector: 'app-jugador-form',
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css']
})
export class JugadorFormComponent implements OnInit {

  id?:number;
  nombre?:string;
  posicion?:string;
  dorsal?:number;

  isEdit:boolean = false;


  constructor(private router : Router,private provider : JugadorProvider,private route : ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params["id"]){
      this.isEdit = true;
      this.provider.getById(this.route.snapshot.params["id"]).subscribe({
        next : (response : Jugador) =>{
          this.id = response.id;
          this.nombre=response.nombre;
          this.posicion = response.posicion;
          this.dorsal=response.dorsal;

          console.log(response);
        },
        error:(error)=> console.error(error),
        complete:()=>console.info("complete")
      })
    }
  }

  onSave(){
    if(this.nombre == null || this.nombre == ''){alert("El nombre es requerido"); return;}
    if(this.posicion == null || this.posicion == ''){alert("La posicion es requerida"); return;}
    if(this.dorsal == null || this.dorsal == 0){alert("El dorsal es requerido y no puede ser 0"); return;}
        this.provider.create(this.nombre,this.posicion,this.dorsal).subscribe(
      {
        next : (response : Jugador) =>{
          this.id = response.id;
          alert("Id generado: " + response.id)
          console.log(response);
          this.router.navigate(["listaJugadores"]);
        },
        error:(error)=> console.error(error),
        complete:()=>console.info("complete")
      }
    );
  }
  onEdit(){
    this.provider.edit(this.id,this.nombre,this.posicion,this.dorsal).subscribe(
      {
        next : (response : Jugador) =>{
          alert("Usuario "+ this.nombre+" editado correctamente")
          console.log(response);
          this.router.navigate(["listaJugadores"]);
        },
        error:(error)=> console.error(error),
        complete:()=>console.info("complete")
      }
    );
  }
  onCancel(){
    this.router.navigate(["listaJugadores"]);
  }

}
