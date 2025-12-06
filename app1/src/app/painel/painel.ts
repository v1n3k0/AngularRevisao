import { Component, EventEmitter, Output } from '@angular/core';
import { Progresso } from '../progresso/progresso';
import { Tentativas } from '../tentativas/tentativas';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [Progresso, Tentativas],
  templateUrl: './painel.html',
  styleUrls: ['./painel.css'],
})
export class Painel {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase = this.frases[this.rodada];

  public progressos: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  public atualizaResposta(event: Event | undefined): void {
    // Protege contra chamadas sem event e garante tipagem segura
    const target = event?.target as HTMLTextAreaElement | undefined;
    this.resposta = target ? target.value : '';
    // console.log(this.resposta);
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;

      this.progressos += (100 / this.frases.length);
      console.log(this.progressos);

      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();
    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);

    this.resposta = '';
  }
}
