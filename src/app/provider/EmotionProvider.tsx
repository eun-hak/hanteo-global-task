import { css, Global, ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

const globalStyles = css`
  body {
    margin: 0;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;

const EmotionProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <div>{children}</div>
  </ThemeProvider>
);

export default EmotionProvider;
