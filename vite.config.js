import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 3000
    },
    define:{
      __APP_ENV__: JSON.stringify(env.VITE_WEBSOCKET_URL),
    }
  }
})