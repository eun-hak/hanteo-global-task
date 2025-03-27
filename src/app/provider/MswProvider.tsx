import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { SetupWorker } from 'msw/lib/browser';

export const MswProvider = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    let worker: SetupWorker;

    if (process.env.NODE_ENV !== 'test') {
      import('../mocks/browser')
        .then(module => {
          worker = module.worker;
          return worker.start();
        })
        .then(() => setIsReady(true))
        .catch(err => console.error('MSW 초기화 실패:', err));
    } else {
      setIsReady(true);
    }

    return () => {
      if (worker && typeof worker.stop === 'function') {
        worker.stop();
      }
    };
  }, []);

  if (!isReady) {
    return <div style={{ display: 'none' }}>MSW 초기화 중...</div>;
  }
  return children;
};
