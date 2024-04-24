/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly APP_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}