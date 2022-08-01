/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly EMAIL: string;
	readonly PHONE: string;
	readonly LINKEDIN: string;
	readonly GITHUB: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
