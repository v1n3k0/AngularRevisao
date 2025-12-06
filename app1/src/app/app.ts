import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topo } from './topo/topo';
import { Painel } from './painel/painel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Topo, Painel, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public jogoEmAdamento: boolean = true;
  public tipoEncerramento: string = '';

  public encerrarJogo(tipo: string): void {
    this.jogoEmAdamento = false;
    this.tipoEncerramento = tipo;
  }

  public reiniciarJogo(): void {
    this.jogoEmAdamento = true;
    this.tipoEncerramento = '';
  }
}
