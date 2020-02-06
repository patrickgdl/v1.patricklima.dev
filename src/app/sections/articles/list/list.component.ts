import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  articles$: Observable<Article[]>;
  articles: Article[];

  constructor() {}

  ngOnInit() {
    this.articles = [
      {
        id: '56198126-d2ae-5da3-b80a-66897297dca1',
        slug: '/Understanding-the-Gatsby-lifecycle-with-Narative',
        title: 'Understanding the Gatsby lifecycle with Narative',
        author: 'Thiago Costa, Dennis Brotzky, Brad Tiller, Mack Mansouri',
        date: 'May 1st, 2019',
        timeToRead: 6,
        excerpt:
          'With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of this incredible tool.',
        hero: {
          full: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABfW3m3NEnB//EABoQAAICAwAAAAAAAAAAAAAAAAACAQMQEzH/2gAIAQEAAQUCki42qPxcf//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGRj//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwG1r//EABcQAAMBAAAAAAAAAAAAAAAAAAABICH/2gAIAQEABj8CNU//xAAcEAACAAcAAAAAAAAAAAAAAAAAARARMVGRseH/2gAIAQEAAT8haSbOYK+8Ggoh/9oADAMBAAIAAwAAABD4/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8QxiX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8Q0q3/xAAgEAACAQEJAAAAAAAAAAAAAAAAAREhMUFRYXGRscHR/9oACAEBAAE/EL9IThYkyW+wwqpyYtdfRyejP//Z',
            aspectRatio: 2.215962441314554,
            src: '/static/5f8eac72cc66a0e5148406174d0cda0e/6ce4c/hero-2.jpg',
            srcSet:
              '/static/5f8eac72cc66a0e5148406174d0cda0e/81a66/hero-2.jpg 236w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/60b3d/hero-2.jpg 472w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/6ce4c/hero-2.jpg 944w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/75eea/hero-2.jpg 1416w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/82549/hero-2.jpg 1888w',
            srcWebp: '/static/5f8eac72cc66a0e5148406174d0cda0e/99fbb/hero-2.webp',
            srcSetWebp:
              '/static/5f8eac72cc66a0e5148406174d0cda0e/77392/hero-2.webp 236w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/1f177/hero-2.webp 472w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/99fbb/hero-2.webp 944w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/4a492/hero-2.webp 1416w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/b0b8f/hero-2.webp 1888w',
            sizes: '(max-width: 944px) 100vw, 944px'
          },
          regular: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABfW3m3NEnB//EABoQAAICAwAAAAAAAAAAAAAAAAACAQMQEzH/2gAIAQEAAQUCki42qPxcf//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGRj//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwG1r//EABcQAAMBAAAAAAAAAAAAAAAAAAABICH/2gAIAQEABj8CNU//xAAcEAACAAcAAAAAAAAAAAAAAAAAARARMVGRseH/2gAIAQEAAT8haSbOYK+8Ggoh/9oADAMBAAIAAwAAABD4/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8QxiX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8Q0q3/xAAgEAACAQEJAAAAAAAAAAAAAAAAAREhMUFRYXGRscHR/9oACAEBAAE/EL9IThYkyW+wwqpyYtdfRyejP//Z',
            aspectRatio: 2.215962441314554,
            src: '/static/5f8eac72cc66a0e5148406174d0cda0e/4bbaa/hero-2.jpg',
            srcSet:
              '/static/5f8eac72cc66a0e5148406174d0cda0e/a67c9/hero-2.jpg 163w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/cdfe7/hero-2.jpg 327w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/4bbaa/hero-2.jpg 653w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/fb6ac/hero-2.jpg 980w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/468cf/hero-2.jpg 1306w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/82549/hero-2.jpg 1888w',
            srcWebp: '/static/5f8eac72cc66a0e5148406174d0cda0e/0acdf/hero-2.webp',
            srcSetWebp:
              '/static/5f8eac72cc66a0e5148406174d0cda0e/ac59e/hero-2.webp 163w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/7660b/hero-2.webp 327w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/0acdf/hero-2.webp 653w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/75470/hero-2.webp 980w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/68d47/hero-2.webp 1306w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/b0b8f/hero-2.webp 1888w',
            sizes: '(max-width: 653px) 100vw, 653px'
          },
          narrow: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABfW3m3NEnB//EABoQAAICAwAAAAAAAAAAAAAAAAACAQMQEzH/2gAIAQEAAQUCki42qPxcf//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGRj//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwG1r//EABcQAAMBAAAAAAAAAAAAAAAAAAABICH/2gAIAQEABj8CNU//xAAcEAACAAcAAAAAAAAAAAAAAAAAARARMVGRseH/2gAIAQEAAT8haSbOYK+8Ggoh/9oADAMBAAIAAwAAABD4/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8QxiX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8Q0q3/xAAgEAACAQEJAAAAAAAAAAAAAAAAAREhMUFRYXGRscHR/9oACAEBAAE/EL9IThYkyW+wwqpyYtdfRyejP//Z',
            aspectRatio: 2.215962441314554,
            src: '/static/5f8eac72cc66a0e5148406174d0cda0e/6e48a/hero-2.jpg',
            srcSet:
              '/static/5f8eac72cc66a0e5148406174d0cda0e/7ac88/hero-2.jpg 114w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/88a59/hero-2.jpg 229w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/6e48a/hero-2.jpg 457w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/7ea95/hero-2.jpg 686w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/39efa/hero-2.jpg 914w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/82549/hero-2.jpg 1888w',
            srcWebp: '/static/5f8eac72cc66a0e5148406174d0cda0e/15384/hero-2.webp',
            srcSetWebp:
              '/static/5f8eac72cc66a0e5148406174d0cda0e/31fce/hero-2.webp 114w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/e3e25/hero-2.webp 229w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/15384/hero-2.webp 457w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/0258d/hero-2.webp 686w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/64ea2/hero-2.webp 914w,\n/static/5f8eac72cc66a0e5148406174d0cda0e/b0b8f/hero-2.webp 1888w',
            sizes: '(max-width: 457px) 100vw, 457px'
          },
          seo: {
            src: '/static/5f8eac72cc66a0e5148406174d0cda0e/150ec/hero-2.jpg'
          }
        }
      },
      {
        id: '0a43c84a-c3f4-5a46-90ec-3401e5230152',
        slug: '/Why-we-built-a-company-before-building-a-product',
        title: 'Why we built a company before building a product',
        author: 'Thiago Costa',
        date: 'April 30th, 2019',
        timeToRead: 3,
        excerpt: 'this is my excerpt',
        hero: {
          full: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAQQ9JuGr/8QAGRABAQEAAwAAAAAAAAAAAAAAAQACEjEy/9oACAEBAAEFAhYW5R6za7//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAADAAMAAAAAAAAAAAAAAAAAARARMXH/2gAIAQEABj8Cm8C4Of/EABwQAAICAwEBAAAAAAAAAAAAAAABETEhYYFxof/aAAgBAQABPyF3XJHleRPGZtnzC3RV4f/aAAwDAQACAAMAAAAQbx//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEh8DFBUWGhsf/aAAgBAQABPxAwLC0lZJYrB5C63Mqq+oCajuz3PibHln//2Q==',
            aspectRatio: 2.208187134502924,
            src: '/static/abc132d96b5bf6bfa6856603fdadccc4/6ce4c/hero-6.jpg',
            srcSet:
              '/static/abc132d96b5bf6bfa6856603fdadccc4/81a66/hero-6.jpg 236w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/60b3d/hero-6.jpg 472w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/6ce4c/hero-6.jpg 944w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/75eea/hero-6.jpg 1416w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/82549/hero-6.jpg 1888w',
            srcWebp: '/static/abc132d96b5bf6bfa6856603fdadccc4/99fbb/hero-6.webp',
            srcSetWebp:
              '/static/abc132d96b5bf6bfa6856603fdadccc4/77392/hero-6.webp 236w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/1f177/hero-6.webp 472w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/99fbb/hero-6.webp 944w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/4a492/hero-6.webp 1416w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/b0b8f/hero-6.webp 1888w',
            sizes: '(max-width: 944px) 100vw, 944px'
          },
          regular: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAQQ9JuGr/8QAGRABAQEAAwAAAAAAAAAAAAAAAQACEjEy/9oACAEBAAEFAhYW5R6za7//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAADAAMAAAAAAAAAAAAAAAAAARARMXH/2gAIAQEABj8Cm8C4Of/EABwQAAICAwEBAAAAAAAAAAAAAAABETEhYYFxof/aAAgBAQABPyF3XJHleRPGZtnzC3RV4f/aAAwDAQACAAMAAAAQbx//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEh8DFBUWGhsf/aAAgBAQABPxAwLC0lZJYrB5C63Mqq+oCajuz3PibHln//2Q==',
            aspectRatio: 2.208187134502924,
            src: '/static/abc132d96b5bf6bfa6856603fdadccc4/4bbaa/hero-6.jpg',
            srcSet:
              '/static/abc132d96b5bf6bfa6856603fdadccc4/a67c9/hero-6.jpg 163w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/cdfe7/hero-6.jpg 327w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/4bbaa/hero-6.jpg 653w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/fb6ac/hero-6.jpg 980w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/468cf/hero-6.jpg 1306w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/82549/hero-6.jpg 1888w',
            srcWebp: '/static/abc132d96b5bf6bfa6856603fdadccc4/0acdf/hero-6.webp',
            srcSetWebp:
              '/static/abc132d96b5bf6bfa6856603fdadccc4/ac59e/hero-6.webp 163w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/7660b/hero-6.webp 327w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/0acdf/hero-6.webp 653w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/75470/hero-6.webp 980w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/68d47/hero-6.webp 1306w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/b0b8f/hero-6.webp 1888w',
            sizes: '(max-width: 653px) 100vw, 653px'
          },
          narrow: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAQQ9JuGr/8QAGRABAQEAAwAAAAAAAAAAAAAAAQACEjEy/9oACAEBAAEFAhYW5R6za7//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAADAAMAAAAAAAAAAAAAAAAAARARMXH/2gAIAQEABj8Cm8C4Of/EABwQAAICAwEBAAAAAAAAAAAAAAABETEhYYFxof/aAAgBAQABPyF3XJHleRPGZtnzC3RV4f/aAAwDAQACAAMAAAAQbx//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEh8DFBUWGhsf/aAAgBAQABPxAwLC0lZJYrB5C63Mqq+oCajuz3PibHln//2Q==',
            aspectRatio: 2.208187134502924,
            src: '/static/abc132d96b5bf6bfa6856603fdadccc4/6e48a/hero-6.jpg',
            srcSet:
              '/static/abc132d96b5bf6bfa6856603fdadccc4/7ac88/hero-6.jpg 114w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/88a59/hero-6.jpg 229w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/6e48a/hero-6.jpg 457w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/7ea95/hero-6.jpg 686w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/39efa/hero-6.jpg 914w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/82549/hero-6.jpg 1888w',
            srcWebp: '/static/abc132d96b5bf6bfa6856603fdadccc4/15384/hero-6.webp',
            srcSetWebp:
              '/static/abc132d96b5bf6bfa6856603fdadccc4/31fce/hero-6.webp 114w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/e3e25/hero-6.webp 229w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/15384/hero-6.webp 457w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/0258d/hero-6.webp 686w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/64ea2/hero-6.webp 914w,\n/static/abc132d96b5bf6bfa6856603fdadccc4/b0b8f/hero-6.webp 1888w',
            sizes: '(max-width: 457px) 100vw, 457px'
          },
          seo: {
            src: '/static/abc132d96b5bf6bfa6856603fdadccc4/150ec/hero-6.jpg'
          }
        }
      },
      {
        id: 'f0822fb9-6480-5efa-ac90-befc0c3ac3b5',
        slug: '/Building-the-new-Hopper.com',
        title: 'Building the new Hopper.com',
        author: 'Dennis Brotzky',
        date: 'April 29th, 2019',
        timeToRead: 4,
        excerpt: 'Creating a new website for Hopper, one of the top 4 most downloaded travel apps in the U.S, along with Uber, Lyft.',
        hero: {
          full: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABNRIbBrZH/8QAHRAAAgAHAQAAAAAAAAAAAAAAAgMAAQQREiIyMf/aAAgBAQABBQKnG8FLJLNjT0vgvf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAERADECIMH/2gAIAQEABj8C7BiUVRjN6f/EABoQAQABBQAAAAAAAAAAAAAAAAExABARIVH/2gAIAQEAAT8hzVh6ikFcZsoKBtOCxLZ//9oADAMBAAIAAwAAABBAD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExUbFhcYH/2gAIAQEAAT8QMbHdBeFNe4aLsqhvDdRR5wAWafvU7s3T/9k=',
            aspectRatio: 2.215962441314554,
            src: '/static/5157d952ae8a3571d9d7565b4dc53e1e/6ce4c/hero-11.jpg',
            srcSet:
              '/static/5157d952ae8a3571d9d7565b4dc53e1e/81a66/hero-11.jpg 236w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/60b3d/hero-11.jpg 472w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/6ce4c/hero-11.jpg 944w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/75eea/hero-11.jpg 1416w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/82549/hero-11.jpg 1888w',
            srcWebp: '/static/5157d952ae8a3571d9d7565b4dc53e1e/99fbb/hero-11.webp',
            srcSetWebp:
              '/static/5157d952ae8a3571d9d7565b4dc53e1e/77392/hero-11.webp 236w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/1f177/hero-11.webp 472w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/99fbb/hero-11.webp 944w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/4a492/hero-11.webp 1416w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/b0b8f/hero-11.webp 1888w',
            sizes: '(max-width: 944px) 100vw, 944px'
          },
          regular: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABNRIbBrZH/8QAHRAAAgAHAQAAAAAAAAAAAAAAAgMAAQQREiIyMf/aAAgBAQABBQKnG8FLJLNjT0vgvf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAERADECIMH/2gAIAQEABj8C7BiUVRjN6f/EABoQAQABBQAAAAAAAAAAAAAAAAExABARIVH/2gAIAQEAAT8hzVh6ikFcZsoKBtOCxLZ//9oADAMBAAIAAwAAABBAD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExUbFhcYH/2gAIAQEAAT8QMbHdBeFNe4aLsqhvDdRR5wAWafvU7s3T/9k=',
            aspectRatio: 2.215962441314554,
            src: '/static/5157d952ae8a3571d9d7565b4dc53e1e/4bbaa/hero-11.jpg',
            srcSet:
              '/static/5157d952ae8a3571d9d7565b4dc53e1e/a67c9/hero-11.jpg 163w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/cdfe7/hero-11.jpg 327w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/4bbaa/hero-11.jpg 653w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/fb6ac/hero-11.jpg 980w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/468cf/hero-11.jpg 1306w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/82549/hero-11.jpg 1888w',
            srcWebp: '/static/5157d952ae8a3571d9d7565b4dc53e1e/0acdf/hero-11.webp',
            srcSetWebp:
              '/static/5157d952ae8a3571d9d7565b4dc53e1e/ac59e/hero-11.webp 163w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/7660b/hero-11.webp 327w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/0acdf/hero-11.webp 653w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/75470/hero-11.webp 980w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/68d47/hero-11.webp 1306w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/b0b8f/hero-11.webp 1888w',
            sizes: '(max-width: 653px) 100vw, 653px'
          },
          narrow: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABNRIbBrZH/8QAHRAAAgAHAQAAAAAAAAAAAAAAAgMAAQQREiIyMf/aAAgBAQABBQKnG8FLJLNjT0vgvf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAERADECIMH/2gAIAQEABj8C7BiUVRjN6f/EABoQAQABBQAAAAAAAAAAAAAAAAExABARIVH/2gAIAQEAAT8hzVh6ikFcZsoKBtOCxLZ//9oADAMBAAIAAwAAABBAD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExUbFhcYH/2gAIAQEAAT8QMbHdBeFNe4aLsqhvDdRR5wAWafvU7s3T/9k=',
            aspectRatio: 2.215962441314554,
            src: '/static/5157d952ae8a3571d9d7565b4dc53e1e/6e48a/hero-11.jpg',
            srcSet:
              '/static/5157d952ae8a3571d9d7565b4dc53e1e/7ac88/hero-11.jpg 114w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/88a59/hero-11.jpg 229w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/6e48a/hero-11.jpg 457w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/7ea95/hero-11.jpg 686w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/39efa/hero-11.jpg 914w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/82549/hero-11.jpg 1888w',
            srcWebp: '/static/5157d952ae8a3571d9d7565b4dc53e1e/15384/hero-11.webp',
            srcSetWebp:
              '/static/5157d952ae8a3571d9d7565b4dc53e1e/31fce/hero-11.webp 114w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/e3e25/hero-11.webp 229w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/15384/hero-11.webp 457w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/0258d/hero-11.webp 686w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/64ea2/hero-11.webp 914w,\n/static/5157d952ae8a3571d9d7565b4dc53e1e/b0b8f/hero-11.webp 1888w',
            sizes: '(max-width: 457px) 100vw, 457px'
          },
          seo: {
            src: '/static/5157d952ae8a3571d9d7565b4dc53e1e/150ec/hero-11.jpg'
          }
        }
      },
      {
        id: 'b9b727f3-d0a9-555b-bb3a-0d4b673dbcba',
        slug: '/How-Figma-changed-the-way-we-designed-Novela',
        title: 'How Figma changed the way we designed Novela',
        author: 'Thiago Costa',
        date: 'April 28th, 2019',
        timeToRead: 8,
        excerpt: 'To understand why Figma is the best design tool for our company, you have to understand what we do. As a designer.',
        hero: {
          full: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHXmWotIyP/xAAbEAABBQEBAAAAAAAAAAAAAAACAAEDERIhMv/aAAgBAQABBQK+TnkIyuNydelql//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAMBAQEAAAAAAAAAAAAAAAABEQIQUf/aAAgBAQAGPwIqZlvzk0qiI//EABoQAQEBAQADAAAAAAAAAAAAAAERAEEhMVH/2gAIAQEAAT8hR1qZR53XAVrQZYg+Tq8AA9G//9oADAMBAAIAAwAAABDoL//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EEn/xAAaEAEAAwADAAAAAAAAAAAAAAABABEhMVGR/9oACAEBAAE/EFCwJzsO0rSTT1MOWWVrFDTyCpI2DZcrgOADAn//2Q==',
            aspectRatio: 1.6216216216216217,
            src: '/static/dea82e6ca7a739a3c78dd518f40fcae7/6ce4c/hero-5.jpg',
            srcSet:
              '/static/dea82e6ca7a739a3c78dd518f40fcae7/81a66/hero-5.jpg 236w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/60b3d/hero-5.jpg 472w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/6ce4c/hero-5.jpg 944w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/150ec/hero-5.jpg 1200w',
            srcWebp: '/static/dea82e6ca7a739a3c78dd518f40fcae7/99fbb/hero-5.webp',
            srcSetWebp:
              '/static/dea82e6ca7a739a3c78dd518f40fcae7/77392/hero-5.webp 236w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/1f177/hero-5.webp 472w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/99fbb/hero-5.webp 944w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/9000d/hero-5.webp 1200w'
          },
          regular: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHXmWotIyP/xAAbEAABBQEBAAAAAAAAAAAAAAACAAEDERIhMv/aAAgBAQABBQK+TnkIyuNydelql//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAMBAQEAAAAAAAAAAAAAAAABEQIQUf/aAAgBAQAGPwIqZlvzk0qiI//EABoQAQEBAQADAAAAAAAAAAAAAAERAEEhMVH/2gAIAQEAAT8hR1qZR53XAVrQZYg+Tq8AA9G//9oADAMBAAIAAwAAABDoL//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EEn/xAAaEAEAAwADAAAAAAAAAAAAAAABABEhMVGR/9oACAEBAAE/EFCwJzsO0rSTT1MOWWVrFDTyCpI2DZcrgOADAn//2Q==',
            aspectRatio: 1.6216216216216217,
            src: '/static/dea82e6ca7a739a3c78dd518f40fcae7/4bbaa/hero-5.jpg',
            srcSet:
              '/static/dea82e6ca7a739a3c78dd518f40fcae7/a67c9/hero-5.jpg 163w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/cdfe7/hero-5.jpg 327w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/4bbaa/hero-5.jpg 653w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/fb6ac/hero-5.jpg 980w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/150ec/hero-5.jpg 1200w',
            srcWebp: '/static/dea82e6ca7a739a3c78dd518f40fcae7/0acdf/hero-5.webp',
            srcSetWebp:
              '/static/dea82e6ca7a739a3c78dd518f40fcae7/ac59e/hero-5.webp 163w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/7660b/hero-5.webp 327w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/0acdf/hero-5.webp 653w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/75470/hero-5.webp 980w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/9000d/hero-5.webp 1200w'
          },
          narrow: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHXmWotIyP/xAAbEAABBQEBAAAAAAAAAAAAAAACAAEDERIhMv/aAAgBAQABBQK+TnkIyuNydelql//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAMBAQEAAAAAAAAAAAAAAAABEQIQUf/aAAgBAQAGPwIqZlvzk0qiI//EABoQAQEBAQADAAAAAAAAAAAAAAERAEEhMVH/2gAIAQEAAT8hR1qZR53XAVrQZYg+Tq8AA9G//9oADAMBAAIAAwAAABDoL//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EEn/xAAaEAEAAwADAAAAAAAAAAAAAAABABEhMVGR/9oACAEBAAE/EFCwJzsO0rSTT1MOWWVrFDTyCpI2DZcrgOADAn//2Q==',
            aspectRatio: 1.6216216216216217,
            src: '/static/dea82e6ca7a739a3c78dd518f40fcae7/6e48a/hero-5.jpg',
            srcSet:
              '/static/dea82e6ca7a739a3c78dd518f40fcae7/7ac88/hero-5.jpg 114w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/88a59/hero-5.jpg 229w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/6e48a/hero-5.jpg 457w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/7ea95/hero-5.jpg 686w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/39efa/hero-5.jpg 914w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/150ec/hero-5.jpg 1200w',
            srcWebp: '/static/dea82e6ca7a739a3c78dd518f40fcae7/15384/hero-5.webp',
            srcSetWebp:
              '/static/dea82e6ca7a739a3c78dd518f40fcae7/31fce/hero-5.webp 114w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/e3e25/hero-5.webp 229w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/15384/hero-5.webp 457w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/0258d/hero-5.webp 686w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/64ea2/hero-5.webp 914w,\n/static/dea82e6ca7a739a3c78dd518f40fcae7/9000d/hero-5.webp 1200w'
          },
          seo: {
            src: '/static/dea82e6ca7a739a3c78dd518f40fcae7/150ec/hero-5.jpg'
          }
        }
      },
      {
        id: '0b426df2-0799-50dd-81db-430972bdbdf3',
        slug: '/Getting-started-wtih-Novela',
        title: 'Getting started wtih Novela',
        author: 'Dennis Brotzky',
        date: 'April 27th, 2019',
        timeToRead: 8,
        excerpt: 'To understand why Figma is the best design tool for our company, you have to understand what we do. As a designer.',
        hero: {
          full: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdTKYokYv//EABsQAAIBBQAAAAAAAAAAAAAAAAABMQIDESEy/9oACAEBAAEFAk8uG9lPFyT/xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQMBAT8BG2X/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAGRAAAwADAAAAAAAAAAAAAAAAAAEQITGB/9oACAEBAAY/AtdmBCn/xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhMUFR/9oACAEBAAE/IbSWELS4jarEZh8GfX0fT//aAAwDAQACAAMAAAAQx+//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8QxRf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Qsbf/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUFRYaH/2gAIAQEAAT8QB8q6wviF46Dbr3GndgaXswulZc7cfSU4n//Z',
            aspectRatio: 1.6216216216216217,
            src: '/static/ebfe799cafe15d6bd9b9654f2cf759c7/6ce4c/hero-4.jpg',
            srcSet:
              '/static/ebfe799cafe15d6bd9b9654f2cf759c7/81a66/hero-4.jpg 236w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/60b3d/hero-4.jpg 472w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/6ce4c/hero-4.jpg 944w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/150ec/hero-4.jpg 1200w',
            srcWebp: '/static/ebfe799cafe15d6bd9b9654f2cf759c7/99fbb/hero-4.webp',
            srcSetWebp:
              '/static/ebfe799cafe15d6bd9b9654f2cf759c7/77392/hero-4.webp 236w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/1f177/hero-4.webp 472w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/99fbb/hero-4.webp 944w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/9000d/hero-4.webp 1200w'
          },
          regular: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdTKYokYv//EABsQAAIBBQAAAAAAAAAAAAAAAAABMQIDESEy/9oACAEBAAEFAk8uG9lPFyT/xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQMBAT8BG2X/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAGRAAAwADAAAAAAAAAAAAAAAAAAEQITGB/9oACAEBAAY/AtdmBCn/xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhMUFR/9oACAEBAAE/IbSWELS4jarEZh8GfX0fT//aAAwDAQACAAMAAAAQx+//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8QxRf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Qsbf/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUFRYaH/2gAIAQEAAT8QB8q6wviF46Dbr3GndgaXswulZc7cfSU4n//Z',
            aspectRatio: 1.6216216216216217,
            src: '/static/ebfe799cafe15d6bd9b9654f2cf759c7/4bbaa/hero-4.jpg',
            srcSet:
              '/static/ebfe799cafe15d6bd9b9654f2cf759c7/a67c9/hero-4.jpg 163w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/cdfe7/hero-4.jpg 327w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/4bbaa/hero-4.jpg 653w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/fb6ac/hero-4.jpg 980w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/150ec/hero-4.jpg 1200w',
            srcWebp: '/static/ebfe799cafe15d6bd9b9654f2cf759c7/0acdf/hero-4.webp',
            srcSetWebp:
              '/static/ebfe799cafe15d6bd9b9654f2cf759c7/ac59e/hero-4.webp 163w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/7660b/hero-4.webp 327w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/0acdf/hero-4.webp 653w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/75470/hero-4.webp 980w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/9000d/hero-4.webp 1200w'
          },
          narrow: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdTKYokYv//EABsQAAIBBQAAAAAAAAAAAAAAAAABMQIDESEy/9oACAEBAAEFAk8uG9lPFyT/xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQMBAT8BG2X/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAGRAAAwADAAAAAAAAAAAAAAAAAAEQITGB/9oACAEBAAY/AtdmBCn/xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhMUFR/9oACAEBAAE/IbSWELS4jarEZh8GfX0fT//aAAwDAQACAAMAAAAQx+//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8QxRf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Qsbf/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUFRYaH/2gAIAQEAAT8QB8q6wviF46Dbr3GndgaXswulZc7cfSU4n//Z',
            aspectRatio: 1.6216216216216217,
            src: '/static/ebfe799cafe15d6bd9b9654f2cf759c7/6e48a/hero-4.jpg',
            srcSet:
              '/static/ebfe799cafe15d6bd9b9654f2cf759c7/7ac88/hero-4.jpg 114w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/88a59/hero-4.jpg 229w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/6e48a/hero-4.jpg 457w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/7ea95/hero-4.jpg 686w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/39efa/hero-4.jpg 914w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/150ec/hero-4.jpg 1200w',
            srcWebp: '/static/ebfe799cafe15d6bd9b9654f2cf759c7/15384/hero-4.webp',
            srcSetWebp:
              '/static/ebfe799cafe15d6bd9b9654f2cf759c7/31fce/hero-4.webp 114w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/e3e25/hero-4.webp 229w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/15384/hero-4.webp 457w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/0258d/hero-4.webp 686w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/64ea2/hero-4.webp 914w,\n/static/ebfe799cafe15d6bd9b9654f2cf759c7/9000d/hero-4.webp 1200w'
          },
          seo: {
            src: '/static/ebfe799cafe15d6bd9b9654f2cf759c7/150ec/hero-4.jpg'
          }
        }
      },
      {
        id: '1fbac964-3415-5386-bee3-b28cf3489984',
        slug: '/Why-Narative-loves-Gatsbys-approach-to-websites',
        title: 'Why Narative loves Gatsbys approach to websites',
        author: 'Dennis Brotzky',
        date: 'April 26th, 2019',
        timeToRead: 8,
        excerpt: 'Creating a new website for Hopper, one of the top 4 most downloaded travel apps in the U.S, along with Uber, Lyft.',
        hero: {
          full: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAFmJoYQWif/xAAaEAEAAgMBAAAAAAAAAAAAAAABAAIDEyEy/9oACAEBAAEFAqsKG1wdYep//8QAFhEBAQEAAAAAAAAAAAAAAAAAEgAB/9oACAEDAQE/ASZ7f//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAgEBPwG1l//EABsQAAEEAwAAAAAAAAAAAAAAAAABAhAhEUGB/9oACAEBAAY/Ah2doUtRyP/EABsQAAICAwEAAAAAAAAAAAAAAAABETEQQXGB/9oACAEBAAE/IV6Y/BlA+XIW9K8f/9oADAMBAAIAAwAAABC43//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAxUYf/xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQIBAT8Q1zYX/8QAHBAAAwACAwEAAAAAAAAAAAAAAAERMbEhUYGh/9oACAEBAAE/EGWoP0lDd6adymPyOWTVhvHzdiwf/9k=',
            aspectRatio: 2.2211764705882353,
            src: '/static/2988756a8f35057bfc91feef2411411d/6ce4c/hero-3.jpg',
            srcSet:
              '/static/2988756a8f35057bfc91feef2411411d/81a66/hero-3.jpg 236w,\n/static/2988756a8f35057bfc91feef2411411d/60b3d/hero-3.jpg 472w,\n/static/2988756a8f35057bfc91feef2411411d/6ce4c/hero-3.jpg 944w,\n/static/2988756a8f35057bfc91feef2411411d/75eea/hero-3.jpg 1416w,\n/static/2988756a8f35057bfc91feef2411411d/82549/hero-3.jpg 1888w',
            srcWebp: '/static/2988756a8f35057bfc91feef2411411d/99fbb/hero-3.webp',
            srcSetWebp:
              '/static/2988756a8f35057bfc91feef2411411d/77392/hero-3.webp 236w,\n/static/2988756a8f35057bfc91feef2411411d/1f177/hero-3.webp 472w,\n/static/2988756a8f35057bfc91feef2411411d/99fbb/hero-3.webp 944w,\n/static/2988756a8f35057bfc91feef2411411d/4a492/hero-3.webp 1416w,\n/static/2988756a8f35057bfc91feef2411411d/b0b8f/hero-3.webp 1888w'
          },
          regular: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAFmJoYQWif/xAAaEAEAAgMBAAAAAAAAAAAAAAABAAIDEyEy/9oACAEBAAEFAqsKG1wdYep//8QAFhEBAQEAAAAAAAAAAAAAAAAAEgAB/9oACAEDAQE/ASZ7f//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAgEBPwG1l//EABsQAAEEAwAAAAAAAAAAAAAAAAABAhAhEUGB/9oACAEBAAY/Ah2doUtRyP/EABsQAAICAwEAAAAAAAAAAAAAAAABETEQQXGB/9oACAEBAAE/IV6Y/BlA+XIW9K8f/9oADAMBAAIAAwAAABC43//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAxUYf/xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQIBAT8Q1zYX/8QAHBAAAwACAwEAAAAAAAAAAAAAAAERMbEhUYGh/9oACAEBAAE/EGWoP0lDd6adymPyOWTVhvHzdiwf/9k=',
            aspectRatio: 2.2211764705882353,
            src: '/static/2988756a8f35057bfc91feef2411411d/4bbaa/hero-3.jpg',
            srcSet:
              '/static/2988756a8f35057bfc91feef2411411d/a67c9/hero-3.jpg 163w,\n/static/2988756a8f35057bfc91feef2411411d/cdfe7/hero-3.jpg 327w,\n/static/2988756a8f35057bfc91feef2411411d/4bbaa/hero-3.jpg 653w,\n/static/2988756a8f35057bfc91feef2411411d/fb6ac/hero-3.jpg 980w,\n/static/2988756a8f35057bfc91feef2411411d/468cf/hero-3.jpg 1306w,\n/static/2988756a8f35057bfc91feef2411411d/82549/hero-3.jpg 1888w',
            srcWebp: '/static/2988756a8f35057bfc91feef2411411d/0acdf/hero-3.webp',
            srcSetWebp:
              '/static/2988756a8f35057bfc91feef2411411d/ac59e/hero-3.webp 163w,\n/static/2988756a8f35057bfc91feef2411411d/7660b/hero-3.webp 327w,\n/static/2988756a8f35057bfc91feef2411411d/0acdf/hero-3.webp 653w,\n/static/2988756a8f35057bfc91feef2411411d/75470/hero-3.webp 980w,\n/static/2988756a8f35057bfc91feef2411411d/68d47/hero-3.webp 1306w,\n/static/2988756a8f35057bfc91feef2411411d/b0b8f/hero-3.webp 1888w'
          },
          narrow: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAFmJoYQWif/xAAaEAEAAgMBAAAAAAAAAAAAAAABAAIDEyEy/9oACAEBAAEFAqsKG1wdYep//8QAFhEBAQEAAAAAAAAAAAAAAAAAEgAB/9oACAEDAQE/ASZ7f//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAgEBPwG1l//EABsQAAEEAwAAAAAAAAAAAAAAAAABAhAhEUGB/9oACAEBAAY/Ah2doUtRyP/EABsQAAICAwEAAAAAAAAAAAAAAAABETEQQXGB/9oACAEBAAE/IV6Y/BlA+XIW9K8f/9oADAMBAAIAAwAAABC43//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAxUYf/xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQIBAT8Q1zYX/8QAHBAAAwACAwEAAAAAAAAAAAAAAAERMbEhUYGh/9oACAEBAAE/EGWoP0lDd6adymPyOWTVhvHzdiwf/9k=',
            aspectRatio: 2.2211764705882353,
            src: '/static/2988756a8f35057bfc91feef2411411d/6e48a/hero-3.jpg',
            srcSet:
              '/static/2988756a8f35057bfc91feef2411411d/7ac88/hero-3.jpg 114w,\n/static/2988756a8f35057bfc91feef2411411d/88a59/hero-3.jpg 229w,\n/static/2988756a8f35057bfc91feef2411411d/6e48a/hero-3.jpg 457w,\n/static/2988756a8f35057bfc91feef2411411d/7ea95/hero-3.jpg 686w,\n/static/2988756a8f35057bfc91feef2411411d/39efa/hero-3.jpg 914w,\n/static/2988756a8f35057bfc91feef2411411d/82549/hero-3.jpg 1888w',
            srcWebp: '/static/2988756a8f35057bfc91feef2411411d/15384/hero-3.webp',
            srcSetWebp:
              '/static/2988756a8f35057bfc91feef2411411d/31fce/hero-3.webp 114w,\n/static/2988756a8f35057bfc91feef2411411d/e3e25/hero-3.webp 229w,\n/static/2988756a8f35057bfc91feef2411411d/15384/hero-3.webp 457w,\n/static/2988756a8f35057bfc91feef2411411d/0258d/hero-3.webp 686w,\n/static/2988756a8f35057bfc91feef2411411d/64ea2/hero-3.webp 914w,\n/static/2988756a8f35057bfc91feef2411411d/b0b8f/hero-3.webp 1888w'
          },
          seo: {
            src: '/static/2988756a8f35057bfc91feef2411411d/150ec/hero-3.jpg'
          }
        }
      }
    ];
  }
}
