import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

import icon from '.';

@Component({
  selector: 'dev-icons',
  template: `<ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent implements OnInit {
  icons = {
    github: icon.githubIcon,
    twitter: icon.twitterIcon,
    instagram: icon.instagramIcon,
    linkedin: icon.linkedinIcon,
    stackoverflow: icon.stackOverflowIcon,
  };

  @Input() set name(iconName: string) {
    this.element.nativeElement.innerHTML = this.icons[iconName].data || null;
  }

  constructor(private element: ElementRef) {}

  ngOnInit() {}
}
