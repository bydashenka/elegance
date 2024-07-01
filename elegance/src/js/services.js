import '../scss/style.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import allservices from '../component/allservices.js'
document.querySelector('#allservices').innerHTML = `
${allservices()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`

