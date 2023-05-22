import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from 'theme'
import {Provider} from 'react-redux'
import {persistor, store} from 'store/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <ChakraProvider>
                  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                  <PersistGate
                      loading={null} persistor={persistor}>
                      <App />
                  </PersistGate>
              </ChakraProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
