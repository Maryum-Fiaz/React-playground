import {createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const pVal = document.getElementsByClassName('greetings');
let user;

if(pVal.innerText === 'Hey there'){
  user = 'Nina'
} else {
  user = 'Anna'
}
const reactElement = createElement(
  'p',
  {className : 'greetings'},
  'Hey there, ',
  user
)

createRoot(document.getElementById('loadedfries')).render(
  <StrictMode>
    {reactElement}
    {/* <App /> */}
  </StrictMode>,
)
