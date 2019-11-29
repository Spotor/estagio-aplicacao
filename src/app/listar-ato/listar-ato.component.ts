import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-listar-ato",
  templateUrl: "./listar-ato.component.html",
  styleUrls: ["./listar-ato.component.css"]
})
export class ListarAtoComponent implements OnInit {
  atos = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.atos().subscribe(
      atos => {
        this.atos = atos;
        console.log(atos);
      },
      error => {
        console.error(error);
      }
    );
  }
}
