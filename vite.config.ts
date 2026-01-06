import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the
    // `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');

    console.log('mode:', mode);
    console.log('VITE_SOURCE_MAP:', env.VITE_SOURCE_MAP);

    const basePath = env.VITE_BASE_PATH ?? './';
    const sourcemap = /^true$/i.test(env.VITE_SOURCE_MAP ?? 'false');
    console.log('sourcemap:', sourcemap);

    return {
        plugins: [react()],
        base: basePath,
        build: {
            sourcemap: sourcemap,
        },
        server: {
            port: 3_000,
            open: true,
        },
        preview: {
            port: 3_000,
            open: true,
        },
        define: {
            __API_BASE_URL__: JSON.stringify(env.VITE_API_BASE_URL),
        },
    }
});