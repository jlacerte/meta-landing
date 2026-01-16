import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// #region agent log
const logDebug = (location, message, data, hypothesisId) => {
  fetch('http://127.0.0.1:7243/ingest/8f7b665b-7765-4c3d-a16c-8a17510eb3de',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location,message,data:{...data},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId})}).catch(()=>{});
};
// #endregion

// #region agent log
logDebug('theme.js:3', 'Theme config definition start', {configDefined: true}, 'B');
// #endregion

const config = defineConfig({
  globalCss: {
    html: {
      scrollBehavior: 'smooth',
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f7f7f7' },
          100: { value: '#e3e3e3' },
          500: { value: '#1a1a1a' },
          900: { value: '#0a0a0a' },
        },
        accent: { value: '#2563eb' },
      },
      fonts: {
        heading: { value: '"Inter", system-ui, sans-serif' },
        body: { value: '"Inter", system-ui, sans-serif' },
      },
    },
  },
})

// #region agent log
logDebug('theme.js:23', 'Creating system with config', {configExists: !!config, defaultConfigExists: !!defaultConfig}, 'B');
// #endregion

export const system = createSystem(defaultConfig, config)

// #region agent log
logDebug('theme.js:25', 'System created', {systemExists: !!system, systemType: typeof system, systemKeys: system ? Object.keys(system).slice(0, 5) : []}, 'B');
// #endregion
