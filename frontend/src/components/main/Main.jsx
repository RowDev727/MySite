import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../app/App'
import './Main.css'
import ScrollToTop from '../../utils/scrollToTop/ScrollToTop'
import { BrowserRouter} from 'react-router-dom'
import { AuthProvider } from '../../contexts/authProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop/>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
