import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tentativas.html',
  styleUrl: './tentativas.css',
})

export class Tentativas {
  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png';

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() {
    console.log(this.coracoes);
  }
}
