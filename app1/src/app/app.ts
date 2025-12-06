import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from './topo/topo.component';
import { Painel } from './painel/painel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopoComponent, Painel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public encerrarJogo(tipo: string): void {
    alert(`O jogo acabou! O tipo é: ${tipo}`);
  }
}
