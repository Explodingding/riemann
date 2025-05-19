declare module 'better-react-mathjax' {
  import { ReactNode } from 'react';

  interface MathJaxProps {
    children: ReactNode;
    inline?: boolean;
    dynamic?: boolean;
  }

  export const MathJax: React.FC<MathJaxProps>;
  export const MathJaxContext: React.FC<{ children: ReactNode }>;
} 