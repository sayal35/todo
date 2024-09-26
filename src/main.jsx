import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteApp from './components/noteapp.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteApp />
  </StrictMode>,
)
