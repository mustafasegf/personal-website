/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DOMAIN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
