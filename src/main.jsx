import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import FormComponent from './FormComponent.jsx'
import ListUserComponent from './People.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormComponent/>
    <ListUserComponent/>
  </StrictMode>,
)
