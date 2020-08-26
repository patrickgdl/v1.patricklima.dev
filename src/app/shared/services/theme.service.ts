import { Injectable } from '@angular/core';

export const darkTheme = {
  primary: '#fff',
  secondary: '#fff',
  grey: '#73737D',
  'background-color': '#111216',
  accent: '#FFD91A',
  hover: 'rgba(255, 255, 255, 0.07)',
  gradient: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
  articleText: '#fff',
  track: 'rgba(255, 255, 255, 0.3)',
  progress: '#fff',
  card: '#1D2128',
  error: '#FF4D6A',
  success: '#00FFAA',
  errorBackground: 'rgba(238, 86, 91, 0.1)',
  horizontalRule: 'rgba(255, 255, 255, 0.15)',
  inputBackground: 'rgba(255, 255, 255, 0.07)',
  tooltip: '#000'
};

export const lightTheme = {
  primary: '',
  secondary: '',
  grey: '',
  'background-color': '',
  accent: '',
  hover: '',
  gradient: '',
  articleText: '',
  track: '',
  progress: '',
  card: '',
  error: '',
  success: '',
  errorBackground: '',
  horizontalRule: '',
  inputBackground: '',
  tooltip: 'lightgrey'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {}

  makeDark() {
    this.setTheme(darkTheme);
  }

  makeLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: { [key: string]: string }) {
    Object.keys(theme).forEach(k => document.body.style.setProperty(`--${k}`, theme[k]));
  }
}
