import { Component } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  imports: [],
  templateUrl: './tentativas.html',
  styleUrl: './tentativas.css',
})
export class Tentativas {
  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png';
}
