import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:any = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', {static: false}) campoInput!: ElementRef;

  incrementa(){
    //this.valor++;
    this.campoInput.nativeElement.value++;
    console.log(this.campoInput?.nativeElement.value);
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    //this.valor--;
    this.campoInput.nativeElement.value++;
    console.log(this.campoInput?.nativeElement.value);
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
