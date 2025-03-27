import { css } from '@emotion/react';

const theme = {
  colors: {
    primary: '#FF2D6A', // 포인트 컬러 (진한 핑크)
    secondary: '#FF92AE', // 연한 핑크
    background: '#f5f5f5', // 배경
    text: '#333333', // 기본 텍스트
    textSecondary: '#666666', // 서브 텍스트
    textDisabled: '#999999', // 비활성 텍스트
    surface: '#ffffff',
    border: '#e0e0e0',
    toast: {
      success: '#4caf50',
      error: '#f44336',
    },
  },

  typography: {
    headings: {
      h1: css`
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
      `,
      h2: css`
        font-size: 18px;
        font-weight: 600;
        line-height: 1.5;
      `,
    },
    body: {
      large: css`
        font-size: 16px;
        font-weight: 500;
        line-height: 1.6;
      `,
      medium: css`
        font-size: 14px;
        font-weight: 400;
        line-height: 1.6;
      `,
      small: css`
        font-size: 13px;
        font-weight: 400;
        line-height: 1.6;
      `,
    },
    caption: css`
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 1.4;
    `,
    button: css`
      font-size: 13px;
      font-weight: 600;
      line-height: 1.4;
    `,
    tab: css`
      font-size: 14px;
      font-weight: 600;
    `,
  },
};

export type ThemeType = typeof theme;
export default theme;
