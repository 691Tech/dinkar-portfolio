// src/types/model-viewer.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        poster?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        'shadow-intensity'?: string | number;
        'shadow-softness'?: string | number;
        'exposure'?: string | number;
        'camera-orbit'?: string;
        'field-of-view'?: string;
        'interaction-prompt'?: string;
        ar?: boolean | string;
        loading?: 'auto' | 'lazy' | 'eager';
        reveal?: 'auto' | 'interaction' | 'manual';
      }, HTMLElement>;
    }
  }
}

export {};
