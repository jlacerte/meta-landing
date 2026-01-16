import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import { system } from './theme'

// #region agent log
const logDebug = (location, message, data, hypothesisId) => {
  fetch('http://127.0.0.1:7243/ingest/8f7b665b-7765-4c3d-a16c-8a17510eb3de',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location,message,data:{...data},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId})}).catch(()=>{});
};
// #endregion

// #region agent log
logDebug('main.jsx:7', 'Main entry point', {systemImported: !!system, systemType: typeof system, ChakraProviderExists: !!ChakraProvider, AppExists: !!App}, 'A');
// #endregion

// #region agent log
const rootElement = document.getElementById('root');
logDebug('main.jsx:12', 'Root element check', {rootExists: !!rootElement, rootId: rootElement?.id, rootTagName: rootElement?.tagName}, 'C');
// #endregion

// #region agent log
logDebug('main.jsx:15', 'Before createRoot', {rootElementExists: !!rootElement}, 'C');
// #endregion

const root = createRoot(rootElement);

// #region agent log
logDebug('main.jsx:19', 'After createRoot', {rootCreated: !!root, systemValue: system ? 'exists' : 'missing'}, 'A');
// #endregion

// #region agent log
logDebug('main.jsx:22', 'Before render', {systemExists: !!system}, 'A');
// #endregion

// #region agent log
try {
  root.render(
    <StrictMode>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </StrictMode>,
  )
  logDebug('main.jsx:32', 'Render completed successfully', {renderSuccess: true}, 'E');
} catch(e) {
  logDebug('main.jsx:35', 'Render error caught', {error: e.message, stack: e.stack, errorName: e.name}, 'E');
  throw e;
}
// #endregion

// #region agent log
logDebug('main.jsx:30', 'After render call', {renderCalled: true}, 'A');
// #endregion
