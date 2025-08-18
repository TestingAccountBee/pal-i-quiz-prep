import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // ⬅️ add
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/pal-i-quiz-prep">
    <App />
  </BrowserRouter>
)
