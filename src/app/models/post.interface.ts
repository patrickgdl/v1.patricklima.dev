export interface Post {
  title: string;
  description: string;
  route: string;
  timeToRead: number;
  slug: string;
  slugs: string[];
  tags: string[];
  hero: string;
  coverImage: string;
  date: Date;
}
