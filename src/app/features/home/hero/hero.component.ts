import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dev-hero',
  template: `
    <section class="section">
      <div class="heading-container">
        <h1 class="hero-heading">
          Oi! Sou Patrick Lima - Designer & Desenvolvedor de Software.
        </h1>
      </div>
      <div class="subheading-container">
        <dev-bio></dev-bio>

        <div class="grid-controls-container">
          <button class="grid-button" (click)="onClickGrid()">
            <dev-tiles [fill]="isGridClicked ? 'var(--primary)' : 'var(--grey)'"></dev-tiles>
          </button>
          <button class="grid-button" (click)="onClickRows()">
            <dev-rows [fill]="isGridClicked ? 'var(--grey)' : 'var(--primary)'"></dev-rows>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [],
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
