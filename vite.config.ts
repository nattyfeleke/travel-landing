// vite.config.ts
import { defineConfig,loadEnv } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');

  return{

    define: {
      'process.env.BACKEND_BASE_URL': JSON.stringify(env.BACKEND_BASE_URL)
      
    },
    plugins: [viteReact(), TanStackRouterVite()]
  }
})



