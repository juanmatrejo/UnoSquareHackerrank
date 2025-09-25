import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Detail } from "../detail/detail";
import { RickAndMorty } from '../../models/rickAndMorty.model';

@Component({
  selector: 'app-characters',
  imports: [CommonModule, Detail],
  standalone: true,
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class Characters {

  @Input()
  _rickAndMorty: RickAndMorty = new RickAndMorty;

}