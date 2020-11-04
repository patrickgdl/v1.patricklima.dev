import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dev-last-articles',
  template: `
    <div class="subheading-container">
      <h3>Últimos Artigos</h3>
      <div class="grid-controls-container">
        <button class="grid-button" (click)="onClickGrid()">
          <dev-tiles [fill]="isGridClicked ? 'var(--primary)' : 'var(--grey)'"></dev-tiles>
        </button>
        <button class="grid-button" (click)="onClickRows()">
          <dev-rows [fill]="isGridClicked ? 'var(--grey)' : 'var(--primary)'"></dev-rows>
        </button>
      </div>
    </div>
  `,
})
export class LastArticlesComponent {
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
