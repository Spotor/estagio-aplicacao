import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_ATOS_URL = 'https://api-info-doe.herokuapp.com/atos/';
  API_NOMEADOS_URL = 'http://localhost:3000/nomeados/';
  API_CARGOS_URL = 'http://localhost:3000/cargos/';
  API_SECRETARIAS_URL = 'http://localhost:3000/secretarias/';
  API_Q_ATOS_URL = 'http://localhost:3000/q_atos/';
  API_DIARIOS_URL = 'http://localhost:3000/diarios/';
  
  constructor(private http: HttpClient) { }

  public atos() {
    return this.http.get(this.API_ATOS_URL);
  }

  public encontrar(id: number) {
    return this.http.get( this.API_ATOS_URL + id + "/");
  }

  public nomeados() {
    return this.http.get(this.API_NOMEADOS_URL);
  }

  public cargos() {
    return this.http.get(this.API_CARGOS_URL);
  }

  public secretarias() {
    return this.http.get(this.API_SECRETARIAS_URL);
  }

  public q_atos() {
    return this.http.get(this.API_Q_ATOS_URL);
  }

  public diarios() {
    return this.http.get(this.API_DIARIOS_URL);
  }
}
