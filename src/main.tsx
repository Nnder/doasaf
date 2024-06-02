import React from 'react'
import ReactDOM from 'react-dom/client'
import MainProvider from './providers/MainProvider.tsx'
import Router from './providers/Router.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider>
      <Router/>
    </MainProvider>
  </React.StrictMode>,
)