export interface Image {
  src: string;
  aspectRatio?: number;
  base64?: string;
  srcWebp?: string;
  srcSet?: string;
  srcSetWebp?: string;
  tracedSVG?: string;
  sizes?: string;
}

export interface ImageFluid extends Image {
  maxHeight: number;
  maxWidth: number;
}

export interface ImageFixed extends Image {
  height: number;
  width: number;
}
