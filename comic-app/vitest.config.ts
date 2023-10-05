import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'
import vue from '@vitejs/plugin-vue';

export default defineConfig(configEnv => mergeConfig(
    defineConfig(configEnv),
    defineConfig({
        test: {
            exclude: ['packages/template/*'],
            globals: true,
            environment: 'jsdom'
        },
    })
))