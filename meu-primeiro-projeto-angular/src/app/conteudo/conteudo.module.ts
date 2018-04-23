import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';

import {FormularioComponent} from './formulario/formulario.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FormularioComponent, 
  ],
  exports:[
    FormularioComponent,
   
  ]
})
export class ConteudoModule { }
