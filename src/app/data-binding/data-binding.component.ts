import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;

  urlImagem: string = 'http://lorempixel.com.br/500/400/?1';

  valorAtual: string = '';
  valorSalvo: string = '';

  mouseOver: boolean = false;

  nome: string = 'abc';

  getValor(){
    return 1;
  }
  curtirCurso(){
    return true;
  }
  botaoClicado(){
    alert('Clicado!');
  }
  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement> evento.target).value);
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }
  salvarValor(valor: any){
    this.valorSalvo = valor;
  }
  mouseChange(){
    this.mouseOver = !this.mouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
