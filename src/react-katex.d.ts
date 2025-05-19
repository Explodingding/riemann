declare module 'react-katex' {
  import { ReactNode } from 'react';

  interface KaTeXProps {
    children: string | string[];
    math?: string;
    block?: boolean;
    errorColor?: string;
    renderError?: (error: Error | TypeError) => ReactNode;
    settings?: {
      maxSize?: number;
      maxExpand?: number;
      fleqn?: boolean;
    };
  }

  export const InlineMath: React.FC<KaTeXProps>;
  export const BlockMath: React.FC<KaTeXProps>;
} 