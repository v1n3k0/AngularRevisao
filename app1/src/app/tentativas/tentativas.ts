import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tentativas.html',
  styleUrl: './tentativas.css',
})

export class Tentativas implements OnChanges {
  @Input() public tentativas: number = 3;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  ngOnChanges(): void {    
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas;

      this.coracoes[indice - 1].cheio = false;
    }
  }

  constructor() {
    console.log(this.coracoes);
  }  
}
