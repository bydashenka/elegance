import '../scss/mstyle.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import master from '../component/mast.js'
document.querySelector('#master').innerHTML = `
${master()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`


