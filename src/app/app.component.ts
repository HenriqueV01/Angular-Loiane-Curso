import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olá mundo, Angular!';
  pessoa: any = {
    nome: 'Henrique',
    idade: '31'
  }

  valorInicial = 15;

  destruir: boolean = false;

  destruirCiclo(){
    this.destruir = true;
  }

  mudarValor(){
    this.valorInicial++;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

}
