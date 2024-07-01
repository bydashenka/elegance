import '../scss/account.css'
import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import account from '../component/ac.js'
document.querySelector('#account').innerHTML = `
${account()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`
