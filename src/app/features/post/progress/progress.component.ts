import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dev-progress',
  template: `
    <aside #progressBar class="aside-container">
      <div class="aside-align">
        <div>
          <div class="overlap-container"></div>
        </div>
      </div>
      <div class="progress-container" tabIndex="{-1}">
        <div class="track-line" aria-hidden="true">
          <div #progressIndicator class="progress-line"></div>
        </div>
      </div>
    </aside>
  `,
  styles: [],
})
export class ProgressComponent implements OnInit {
  @ViewChild('progressBar', { static: true }) progressBar: ElementRef;
  @ViewChild('progressIndicator', { static: true }) scrollProgress: ElementRef;
  progressBarEl: HTMLElement;
  scrollProgressEl: HTMLElement;

  articleNext: number;
  bottomOffset: number;

  constructor() {}

  ngOnInit() {
    this.progressBarEl = this.progressBar.nativeElement;
    this.scrollProgressEl = this.scrollProgress.nativeElement;

    if (document.getElementById('articleNext')) {
      this.articleNext = document.getElementById('articleNext').offsetHeight;
    } else {
      this.articleNext = 0;
    }

    const footerSection = 150;

    this.bottomOffset = ((this.articleNext + footerSection + 250) / document.body.scrollHeight) * 100;
    this.bottomOffset += this.bottomOffset * 1.1;
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event: any) {
    this.updateProgress();
  }

  updateProgress() {
    const percentScrolled = (window.pageYOffset / document.body.scrollHeight) * (100 + this.bottomOffset);

    const transformation = 'translateY(' + percentScrolled + '%)';
    this.scrollProgressEl.style.transform = transformation;

    if (percentScrolled > 100) {
      this.progressBarEl.style.animationName = 'progress-fade-out';
      setTimeout(() => {
        this.progressBarEl.style.opacity = '0';
      }, 500);
    } else {
      this.progressBarEl.style.animationName = 'progress-fade-in';
      setTimeout(() => {
        this.progressBarEl.style.opacity = '1';
      }, 500);
    }
  }
}
