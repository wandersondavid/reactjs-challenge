import { PaletteColor, PaletteColorOptions } from '@mui/material';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    brand: {
      blue: CSSProperties['color'];
      green: CSSProperties['color'];
      red: CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    brand: {
      blue: CSSProperties['color'];
      green: CSSProperties['color'];
      red: CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: PaletteColor;
    secondary: PaletteColor;
  }

  interface PaletteOptions {
    primary: PaletteColorOptions;
    secondary: PaletteColorOptions;

  }
}
