import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-logo',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="84" viewBox="0 0 101 84" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.716 49.502L0 56.937L49.984 83.483L50.051 65.783L19.716 49.502Z" fill="var(--primary)"/>
      <path d="M49.984 33.63V17.005L0 42.146L19.716 49.505L49.984 33.63Z" fill="#BFBFBF"/>
      <path d="M0 42.146V56.937L19.716 49.502L0 42.146Z" fill="#7F7F7F"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M80.288 32.497L100.004 39.932L50.02 66.478L49.953 48.774L80.288 32.497Z" fill="var(--primary)"/>
      <path d="M50.02 16.625V0L100.004 25.141L80.288 32.5L50.02 16.625Z" fill="#BFBFBF"/>
      <path d="M100.004 25.141V39.932L80.288 32.497L100.004 25.141Z" fill="#7F7F7F"/>
    </svg>

  `,
  styles: [
    `
      svg {
        width: auto;
        height: 30px;
      }
    `,
  ],
})
export class LogoComponent implements OnInit {
  @Input() onlyIcon = false;

  constructor() {}

  ngOnInit() {}
}
