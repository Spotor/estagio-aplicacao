import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leitor-de-ato',
  templateUrl: './leitor-de-ato.component.html',
  styleUrls: ['./leitor-de-ato.component.css']
})
export class LeitorDeAtoComponent implements OnInit {

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ato = null;
  ato_erro = false;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.encontrar(Number.parseInt(id))
    .subscribe(ato => {
      if (!ato) {
        this.router.navigate(['pagina-nao-encontrada']);
      } else {
        this.ato = ato;
      }
    },
    erro => this.ato_erro = false);
  }
}