import '../scss/contactsstyle.css'
import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import contact from '../component/contact.js'
document.querySelector('#contact').innerHTML = `
${contact()}
`

import form from '../component/form.js'
document.querySelector('#form').innerHTML = `
${form()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`

