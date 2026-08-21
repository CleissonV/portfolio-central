import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/epilogue/latin-400.css'
import '@fontsource/epilogue/latin-500.css'
import '@fontsource/epilogue/latin-600.css'
import '@fontsource/epilogue/latin-700.css'
import '@fontsource/epilogue/latin-800.css'
import '@fontsource/epilogue/latin-900.css'
import App from './App'
import Analytics from './components/Analytics'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Analytics />
      <App />
    </LanguageProvider>
  </React.StrictMode>
)
