import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  atos = null;
  nomeados = null;
  cargos = null;
  diarios = null;
  secretarias = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.diarios().subscribe(
      diarios => {
        this.diarios = diarios.count;
      },
      error => {
        console.error(error);
      }
    );
    this.api.atos().subscribe(
      atos => {
        this.atos = atos.count;
      },
      error => {
        console.error(error);
      }
    );

    this.api.nomeados().subscribe(
      nomeados => {
        this.nomeados = nomeados.count;
      },
      error => {
        console.error(error);
      }
    );
    this.api.cargos().subscribe(
      cargos => {
        this.cargos = cargos.count;
      },
      error => {
        console.error(error);
      }
    );

    this.api.secretarias().subscribe(
      secretarias => {
        this.secretarias = secretarias.count;
      },
      error => {
        console.error(error);
      }
    );
  }
}
