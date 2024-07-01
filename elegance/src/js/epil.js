import '../scss/epilstyle.css'
import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import epil from '../component/servepil.js'
document.querySelector('#epil').innerHTML = `
${epil()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`
