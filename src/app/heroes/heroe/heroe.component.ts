import { Component } from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Ironman';
    edad:number = 39;
    poder:string = 'Volar';

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }


     PoderDoble(edad:number){
        return this.edad +  edad;
    }

    obtenerNombre():string{
        return `${ this.nombre} - sano  ${this.edad}`
    }
    cambiarNombre(nombre:string){
        this.nombre =nombre
    }

    cambiarEdad(edad:number){
        this.edad =edad
    }
}

export class TaylorComponent{

}