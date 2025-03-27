import { css, Global, ThemeProvider } from '@emotion/react';
import { fontFaces } from '../styles/fonts';
import theme from '../styles/theme';

const globalStyles = css`
  body {
    margin: 0;
  }
  ${fontFaces}
`;

const EmotionProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <div>{children}</div>
  </ThemeProvider>
);

export default EmotionProvider;
