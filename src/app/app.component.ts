import { Component } from '@angular/core';
/*
 O decoretor @Component -> com o  podemos colocar uma meta informação dentro
 dentro de uma class, criando instancia (objetos)
*/

// O Angular usa o webpach, incapusulado.
@Component({
  // selector: permiti chamar o componente 
  selector: 'app-root',
  // templateUrl: diz qual é a apresentação do componentes
  templateUrl: './app.component.html',
  // styleUrls: diz onde está o CSS do componente.
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'Bem vindo ao seu "Projeto Inicial"!';
}
