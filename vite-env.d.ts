/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUTER_WORKER_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}