import { Component, ElementRef, ViewChild } from '@angular/core';
import { Characters } from "../characters/characters";
import { RickAndMorty } from '../../models/rickAndMorty.model';
import { RickmortyService } from '../../services/rickmorty.service';

@Component({
  selector: 'app-navigation',
  imports: [Characters],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {

  @ViewChild('dvCharacters') dvCharacters!: ElementRef<HTMLDivElement>;

  _result: RickAndMorty = new RickAndMorty;

  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pages: number;

  ngAfterViewInit(): void {

    this.dvCharacters.nativeElement.focus();
  }

  constructor(private _service: RickmortyService) {

    _service.getCharacters('https://rickandmortyapi.com/api/character').subscribe(response => {
      this._result = response;
      this.pages = this._result.info.pages;
    });

    this.currentPage = 1;
    this.previousPage = null;
    this.nextPage = 2;
    this.pages = 0;
  }

  previous(): void {
    this.currentPage -= 1;
    this._service.getCharacters(this._result.info.prev).subscribe(response => this._result = response);
    this.dvCharacters.nativeElement.focus();
  }

  isFirstPage(): boolean {
    if (this._result.info == undefined || this._result.info.prev == null || this.currentPage === 1) {
      return true;
    }
    return false;
  }

  next(): void {
    this.currentPage += 1;
    this._service.getCharacters(this._result.info.next).subscribe(response => this._result = response);
    this.dvCharacters.nativeElement.focus();
  }

  isLastPage(): boolean {
    if (this._result.info === undefined || this._result.info.next === null || this.currentPage === this._result.info.pages) {
      return true;
    }
    return false;
  }
}
