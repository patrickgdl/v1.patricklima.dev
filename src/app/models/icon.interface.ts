type iconType = 'twitter' | 'github' | 'instagram' | 'linkedin' | 'stackoverflow';

export interface Icon {
  name: iconType;
  data: string;
}
