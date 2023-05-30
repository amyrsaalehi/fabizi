import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import { pkg } from '@carbon/ibm-products'

pkg.setAllFeatures(true)
pkg.setAllComponents(true)


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , document.getElementById('root')
)