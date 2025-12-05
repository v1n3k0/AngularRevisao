import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  imports: [],
  templateUrl: './progresso.html',
  styleUrl: './progresso.css',
})

export class Progresso {
  @Input() public progressos: number = 0;
}
