import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import Authprovider from './Routes/Authprovider.jsx';
import router from './Routes/Routes.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
 <RouterProvider router={router} />
    </Authprovider>
    
  </StrictMode>,
)
