import { Box } from '@chakra-ui/react'
// #region agent log
const logDebug = (location, message, data, hypothesisId) => {
  fetch('http://127.0.0.1:7243/ingest/8f7b665b-7765-4c3d-a16c-8a17510eb3de',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location,message,data:{...data},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId})}).catch(()=>{});
};
// #endregion

import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SetupSection from './sections/SetupSection'
import ProcessSection from './sections/ProcessSection'
import StrategySection from './sections/StrategySection'

// #region agent log
logDebug('App.jsx:13', 'After imports', {HeaderExists: !!Header, HeroExists: !!Hero, FooterExists: !!Footer, SetupSectionExists: !!SetupSection, ProcessSectionExists: !!ProcessSection, StrategySectionExists: !!StrategySection, BoxExists: !!Box}, 'D');
// #endregion

function App() {
  // #region agent log
  logDebug('App.jsx:19', 'App function called', {BoxExists: !!Box}, 'E');
  // #endregion
  
  // #region agent log
  try {
    logDebug('App.jsx:22', 'Before return JSX', {componentsReady: !!(Header && Hero && Footer && SetupSection && ProcessSection && StrategySection)}, 'E');
  } catch(e) {
    logDebug('App.jsx:24', 'Error in App before return', {error: e.message, stack: e.stack}, 'E');
  }
  // #endregion
  
  // #region agent log
  logDebug('App.jsx:28', 'Starting component render', {timestamp: Date.now()}, 'E');
  // #endregion
  
  try {
    // #region agent log
    logDebug('App.jsx:32', 'Rendering Header component', {HeaderType: typeof Header}, 'E');
    // #endregion
    const header = <Header />;
    
    // #region agent log
    logDebug('App.jsx:36', 'Rendering Hero component', {HeroType: typeof Hero}, 'E');
    // #endregion
    const hero = <Hero />;
    
    const jsx = (
      <Box>
        {header}
        {hero}
        <SetupSection />
        <ProcessSection />
        <StrategySection />
        <Footer />
      </Box>
    );
    // #region agent log
    logDebug('App.jsx:48', 'JSX created successfully', {jsxCreated: !!jsx}, 'E');
    // #endregion
    return jsx;
  } catch(e) {
    // #region agent log
    logDebug('App.jsx:52', 'Error in App JSX return', {error: e.message, stack: e.stack, errorName: e.name}, 'E');
    // #endregion
    throw e;
  }
}

export default App
