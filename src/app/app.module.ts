import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListarAtoComponent } from './listar-ato/listar-ato.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LeitorDeAtoComponent } from './leitor-de-ato/leitor-de-ato.component';

const rotas: Routes = [
  { path: 'atos', component: ListarAtoComponent, },
  { path: 'atos/:id', component: LeitorDeAtoComponent, },
  { path: 'sobre', component: SobreComponent, },
  { path: '', component: HomeComponent, },
  { path: '**', component: PaginaNaoEncontradaComponent, },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarAtoComponent,
    SobreComponent,
    PaginaNaoEncontradaComponent,
    LeitorDeAtoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
