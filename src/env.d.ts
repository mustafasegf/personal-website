/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly EMAIL: string;
	readonly PHONE: string;
	readonly LINKEDIN: string;
	readonly GITHUB: string;
  readonly TWITTER: string;
  readonly INSTAGRAM: string;
  readonly YOUTUBE: string;
  readonly FACEBOOK: string;
  readonly DOMAIN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
