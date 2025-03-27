import '@emotion/react';
import type { ThemeType } from './theme';

declare module '@emotion/react' {
  export type Theme = ThemeType;
}
