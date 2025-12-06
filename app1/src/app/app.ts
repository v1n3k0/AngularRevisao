import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from './topo/topo.component';
import { Painel } from './painel/painel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopoComponent, Painel, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public jogoEmAdamento: boolean = true;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAdamento = false;
  }
}
