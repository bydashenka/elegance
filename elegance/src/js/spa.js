import '../scss/spa.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import spa from '../component/servspa.js'
document.querySelector('#spa').innerHTML = `
${spa()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`

