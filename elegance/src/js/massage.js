import '../scss/massage.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import massage from '../component/servmassage.js'
document.querySelector('#massage').innerHTML = `
${massage()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`

