import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'dev-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {
  isList = false;
  listRemoveWidth: MediaQueryList;
  listAddWidth: MediaQueryList;

  constructor() {}

  ngOnInit() {
    document.getElementById('rows').style.fill = 'var(--grey)';

    this.listRemoveWidth = window.matchMedia('(max-width: 735px)');
    this.listAddWidth = window.matchMedia('(min-width: 735px)');
  }

  @HostListener('window:resize', ['$event'])
  resize(event: any) {
    this.adjustListAtMobile();
  }

  adjustListAtMobile() {
    if (this.listRemoveWidth.matches) {
      document.getElementById('articlesList').classList.remove('articles-list-container-alt');
    } else if (this.listAddWidth.matches && this.isList) {
      document.getElementById('articlesList').classList.add('articles-list-container-alt');
    }
  }

  makeGrid() {
    document.getElementById('articlesList').classList.remove('articles-list-container-alt');
    document.getElementById('tiles').style.fill = 'var(--primary)';
    document.getElementById('rows').style.fill = 'var(--grey)';
    this.isList = false;
  }

  makeRows() {
    document.getElementById('articlesList').classList.add('articles-list-container-alt');
    document.getElementById('rows').style.fill = 'var(--primary)';
    document.getElementById('tiles').style.fill = 'var(--grey)';
    this.isList = true;
  }
}
