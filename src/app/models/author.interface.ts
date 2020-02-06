import { ImageFluid } from './image.interface';

export interface Author {
    authorsPage?: boolean;
    featured?: boolean;
    name: string;
    slug: string;
    bio: string;
    avatar: {
      image: ImageFluid;
      full: ImageFluid;
    };
  }