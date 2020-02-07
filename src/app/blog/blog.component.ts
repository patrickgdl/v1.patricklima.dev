import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  progressBar: HTMLElement;
  scrollProgress: HTMLElement;
  articleSubscription: number;
  articleNext: number;
  bottomOffset: number;

  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
    window.addEventListener('scroll', this.updateProgress);

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
      setTimeout(function() {
        this.progressBar.style.opacity = '0';
      }, 500);
    } else {
      this.progressBar.style.animationName = 'progress-fade-in';
      setTimeout(function() {
        this.progressBar.style.opacity = '1';
      }, 500);
    }
  }
}
