import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroesPenetradores:string[]=['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Loki'];
    heroeBorrado:string='';

    get verificaHeroeBorrado():boolean{
      if (this.heroeBorrado!='')
        return true;
      else
        return false;
    }
    borrar():void{
      
      this.heroeBorrado=  this.heroesPenetradores.shift() || '';
      console.log(this.heroeBorrado);
    }

}
