import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dev-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {
  @Output() clickedGrid = new EventEmitter();
  @Output() clickedRows = new EventEmitter();

  constructor() {}

  ngOnInit() {
    document.getElementById('rows').style.fill = 'var(--grey)';
  }

  onClickGrid() {
    this.clickedGrid.emit();
  }

  onClickRows() {
    this.clickedRows.emit();
  }
}
