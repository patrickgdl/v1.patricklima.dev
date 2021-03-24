import { Component } from '@angular/core';

@Component({
  selector: 'dev-hero',
  template: `
    <div class="hero-container">
      <h1 class="hero-heading">Olá! Sou <a class="highlighter" [routerLink]="['/about']">Patrick Lima</a> - Desenvolvedor de Software.</h1>
    </div>
  `,
  styles: [],
})
export class HeroComponent {}
