import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dev-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent {
  @Output() clickedGrid = new EventEmitter();
  @Output() clickedRows = new EventEmitter();
  isGridClicked = true;

  constructor() {}

  onClickGrid() {
    this.clickedGrid.emit();
    this.isGridClicked = true;
  }

  onClickRows() {
    this.clickedRows.emit();
    this.isGridClicked = false;
  }
}
