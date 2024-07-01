import '../scss/mpstyle.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import mp from '../component/servmp.js'
document.querySelector('#mp').innerHTML = `
${mp()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`

