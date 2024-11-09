import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // This alias ensures `process` is polyfilled
            process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
        }
    },
    define: {
        // Define `process.env` to avoid ReferenceError
        'process.env': {},
    },
    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: 'globalThis'
            },
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    process: true,
                    buffer: true,
                }),
                NodeModulesPolyfillPlugin()
            ]
        }
    },
    build: {
        rollupOptions: {
            plugins: [
                rollupNodePolyFill(),
            ]
        }
    }
});
