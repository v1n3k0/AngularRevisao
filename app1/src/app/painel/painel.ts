import { Component } from '@angular/core';
import { Progresso } from '../progresso/progresso';
import { Tentativas } from '../tentativas/tentativas';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  imports: [Progresso, Tentativas],
  templateUrl: './painel.html',
  styleUrls: ['./painel.css'],
})
export class Painel {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);
  }

  public atualizaResposta(event: Event | undefined): void {
    // Protege contra chamadas sem event e garante tipagem segura
    const target = event?.target as HTMLTextAreaElement | undefined;
    this.resposta = target ? target.value : '';
    // console.log(this.resposta);
  }

  public verificarResposta(): void {
    console.log('Verificando resposta:', this.resposta);
  }
}
