import '../scss/reg.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import reg from '../component/registr.js'
document.querySelector('#reg').innerHTML = `
${reg()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`
