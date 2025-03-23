import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Root/Layout.jsx'
import { ToastContainer} from 'react-toastify';
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Layout></Layout>
    <ToastContainer />
    </AuthProvider>
    
  </StrictMode>,
)
