import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_URL = "https://api-info-doe.herokuapp.com";
  // API_NOMEADOS_URL = 'http://localhost:3000/nomeados/';
  // API_CARGOS_URL = 'http://localhost:3000/cargos/';
  // API_SECRETARIAS_URL = 'http://localhost:3000/secretarias/';
  // API_Q_ATOS_URL = 'http://localhost:3000/q_atos/';
  // API_DIARIOS_URL = 'http://localhost:3000/diarios/';

  constructor(private http: HttpClient) {}

  public atos(): any {
    return this.http.get(`${this.API_URL}/atos/`);
  }

  public encontrar(id: number): any {
    return this.http.get(`${this.API_URL}/atos/${id}/`);
  }

  public nomeados(): any {
    return this.http.get(`${this.API_URL}/nomeados/`);
  }

  public cargos(): any {
    return this.http.get(`${this.API_URL}/cargos/`);
  }

  public secretarias(): any {
    return this.http.get(`${this.API_URL}/secretarias/`);
  }

  public q_atos(): any {
    return this.http.get(`${this.API_URL}/atos/`);
  }

  public diarios(): any {
    return this.http.get(`${this.API_URL}/diarios/`);
  }
}
