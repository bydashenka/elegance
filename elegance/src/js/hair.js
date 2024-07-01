import '../scss/hairstyle.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import hair from '../component/servhair.js'
document.querySelector('#hair').innerHTML = `
${hair()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`
