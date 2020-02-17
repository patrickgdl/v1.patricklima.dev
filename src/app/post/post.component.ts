import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class PostComponent implements OnInit {
  progressBar: HTMLElement;
  scrollProgress: HTMLElement;
  articleSubscription: number;
  articleNext: number;
  bottomOffset: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

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

  @HostListener('window:scroll', ['$event'])
  scroll(event: any) {
    this.updateProgress();
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
