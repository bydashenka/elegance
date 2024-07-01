import '../scss/salestyle.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import allsale from '../component/allsale.js'
document.querySelector('#allsale').innerHTML = `
${allsale()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`

