import React from 'react'
import ReactDOM from 'react-dom/client'
import MainProvider from './providers/MainProvider.tsx'
import Router from './providers/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider>
      <Router/>
    </MainProvider>
  </React.StrictMode>,
)
