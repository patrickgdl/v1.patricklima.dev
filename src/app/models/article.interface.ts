import { Author } from './author.interface';
import { Image } from './image.interface';

export interface Article {
  id: string;
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  hero: {
    full: Image;
    regular: Image;
    narrow: Image;
    seo: {
      src: string;
    }
  };
  timeToRead: number;
  date: string;
}
