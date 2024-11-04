import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Section from './Section.jsx'
import './index.css'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Section />
  </StrictMode>
)
