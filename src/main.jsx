import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodosProvider } from './actions/TodosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodosProvider>
    <App />
    </TodosProvider>
  </StrictMode>,
)
