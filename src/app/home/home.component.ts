import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  q_atos$ = null;
  nomeados$ = null;
  cargos$ = null;
  diarios$ = null;
  secretarias$ = null;

  constructor(private api: ApiService) {  }

  ngOnInit() {
    this.diarios$ = this.api.diarios();
    this.q_atos$ = this.api.q_atos();
    this.nomeados$ = this.api.nomeados();
    this.cargos$ = this.api.cargos();
    this.secretarias$ = this.api.secretarias();
  }

}
