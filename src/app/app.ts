import { Component, signal } from '@angular/core';
import { Navigation } from "./components/navigation/navigation";

@Component({
  selector: 'app-root',
  imports: [Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RickAndMortyCharacters');
}
