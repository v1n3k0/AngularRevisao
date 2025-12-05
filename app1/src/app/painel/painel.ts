import { Component } from '@angular/core';
import { Progresso } from '../progresso/progresso';
import { Tentativas } from '../tentativas/tentativas';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  imports: [Progresso, Tentativas],
  templateUrl: './painel.html',
  styleUrl: './painel.css',
})
export class Painel {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';

  constructor() { console.log(this.frases);  }
}
