import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export const MswProvider = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      import('../mocks/browser')
        .then(({ worker }) => worker.start())
        .then(() => setIsReady(true))
        .catch(err => console.error('MSW 초기화 실패:', err));
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;

  return children;
};
