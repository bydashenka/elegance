import '../scss/makeupstyle.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import makeup from '../component/servmakeup.js'
document.querySelector('#makeup').innerHTML = `
${makeup()}
`

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`

