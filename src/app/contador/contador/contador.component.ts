import { Component }  from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
    
    <h1>EQUIPMENT {{titulo}}</h1>
    <h3> La Base es:  <strong> {{base}}</strong> </h3>

    <button (click)=" acumular(base)">+ {{base}} </button>
    <span>{{numero}}</span>

    <button (click)="acumular(-base)">- {{base}}</button>
    `,
})
export class ContadorComponent{
    titulo = 'Contador App';
    numero = 10;
    base:number = 5;
    sumar (){
        this.numero += +1;
    }

    acumular(valor: number){
        this.numero += valor;
    }
}