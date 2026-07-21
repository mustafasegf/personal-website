/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DOMAIN: string;
  readonly PUBLIC_EMAIL: string;
  readonly PUBLIC_GITHUB: string;
  readonly PUBLIC_LINKEDIN: string;
  readonly PUBLIC_X: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
