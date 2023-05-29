import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import { pkg } from '@carbon/ibm-products'

pkg.component.Datagrid = true;
pkg.feature['Datagrid.useFiltering'] = true;


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , document.getElementById('root')
)