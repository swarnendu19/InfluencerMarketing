/// <reference types="vite/client" />

declare module 'vite-plugin-eslint' {
    import { Plugin } from 'vite';
    interface ViteEslintOptions {
      failOnError?: boolean;
    }
    function viteEslint(options?: ViteEslintOptions): Plugin;
    export = viteEslint;
  }