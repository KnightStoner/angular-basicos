import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroe: string = 'Superman';
  heroes:  string[] =['Superman', 'Spiderman', 'Ironman'];
  heroeborrado:string = '';
  constructor() { }

  
 borrar(){
    this.heroeborrado = this.heroes.shift() || '';
 

 }
}
