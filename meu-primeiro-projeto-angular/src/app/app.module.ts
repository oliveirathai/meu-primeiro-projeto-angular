import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrincipalModule } from './principal/principal.module';
import {ConteudoModule} from './conteudo/conteudo.module';

import { AppComponent } from './app.component';
import { ProcessaDadosComponent } from './processa-dados/processa-dados.component';


@NgModule({
  declarations: [
    AppComponent,
    ProcessaDadosComponent,
      ],
  imports: [
    BrowserModule,
    PrincipalModule,
    ConteudoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
