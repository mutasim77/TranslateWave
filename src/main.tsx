import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
