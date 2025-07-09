import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ApiProvider } from "./Components/ApiContext.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ApiProvider>
      <App />
     </ApiProvider>
  </StrictMode>,
)
