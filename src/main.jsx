import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter future={{v7_relativeSplatPath: true,}}>
      <App />
    </BrowserRouter>
  </Provider>
)
