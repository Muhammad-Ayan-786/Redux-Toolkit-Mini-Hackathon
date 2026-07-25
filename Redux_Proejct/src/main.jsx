import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/AppRoutes'

createRoot(document.getElementById('root')).render(
  <AppRoutes />
)
