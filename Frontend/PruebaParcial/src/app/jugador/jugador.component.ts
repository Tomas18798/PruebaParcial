import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from '../Interfaces/Jugador';
import { JugadorProvider } from '../Services/JugadorProvider';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugadores: Jugador[] = [];
  constructor(private provider: JugadorProvider, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.provider.getAll().subscribe({
      next: (response: Jugador[]) => {
        this.jugadores = response;
        console.log(response);
      },
      error: (error) => console.log(error),
      complete: () => console.log("complete")
    })
  }

  create() {
    this.router.navigate(["form"], { relativeTo: this.route });


  }

  edit(id: number) {
    this.router.navigate(["form", id], { relativeTo: this.route });

  }
  delete(id: number) {
    this.provider.delete(id).subscribe(
      {
        next: () => {
          this.jugadores = this.jugadores.filter((jugador) => jugador.id != id);
          console.log(this.jugadores);
        },
        error: (error) => console.error(error),
        complete: ()=> console.log("complete")

      });
    //this.router.navigate(["form",id],{relativeTo:this.route});
  }

}
