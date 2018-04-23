import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
func: any ={
  nome : null,
  telefone: null,
  cargo :null,
  problema: null,
  foto:null
}
  constructor() { }

  ngOnInit() {
  }
  onSubmit (Form) {
console.log (Form);
  }

}
