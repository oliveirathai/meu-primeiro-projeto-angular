import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormularioComponent} from './formulario/formulario.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormularioComponent, 
  ],
  exports:[
    FormularioComponent,
   
  ]
})
export class ConteudoModule { }
