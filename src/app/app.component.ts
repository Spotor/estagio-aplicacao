import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto-estagio';


  /**
   * Implementação da interface {@link OnInit}
   */
  ngOnInit() {

  }

}
