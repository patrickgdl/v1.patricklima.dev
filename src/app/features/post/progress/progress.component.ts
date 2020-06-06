import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-progress',
  template: `
    <aside id="progressBar" class="aside-container">
      <div class="aside-align">
        <div>
          <div class="overlap-container"></div>
        </div>
      </div>

      <div class="progress-container" tabIndex="{-1}">
        <div class="track-line" aria-hidden="true">
          <div id="progressIndicator" class="progress-line"></div>
        </div>
      </div>
    </aside>
  `,
  styles: [],
})
export class ProgressComponent implements OnInit {
  progressBar: HTMLElement;
  scrollProgress: HTMLElement;

  articleSubscription: number;
  articleNext: number;
  bottomOffset: number;

  constructor() {}

  ngOnInit() {
    this.progressBar = document.getElementById('progressBar');

    this.scrollProgress = document.getElementById('progressIndicator');

    if (document.getElementById('subscriptionSection')) {
      this.articleSubscription = document.getElementById('subscriptionSection').offsetHeight;
    } else {
      this.articleSubscription = 0;
    }

    if (document.getElementById('articleNext')) {
      this.articleNext = document.getElementById('articleNext').offsetHeight;
    } else {
      this.articleNext = 0;
    }

    const footerSection = 150;

    this.bottomOffset = ((this.articleSubscription + this.articleNext + footerSection + 250) / document.body.scrollHeight) * 100;
    this.bottomOffset += this.bottomOffset * 1.1;
  }

  updateProgress() {
    const percentScrolled = (window.pageYOffset / document.body.scrollHeight) * (100 + this.bottomOffset);

    const transformation = 'translateY(' + percentScrolled + '%)';
    this.scrollProgress.style.transform = transformation;

    if (percentScrolled > 100) {
      this.progressBar.style.animationName = 'progress-fade-out';
      setTimeout(function () {
        this.progressBar.style.opacity = '0';
      }, 500);
    } else {
      this.progressBar.style.animationName = 'progress-fade-in';
      setTimeout(function () {
        this.progressBar.style.opacity = '1';
      }, 500);
    }
  }
}
