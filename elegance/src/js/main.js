import '../scss/style.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import main from '../component/main.js'
document.querySelector('#main').innerHTML = `
${main()}
`

import services from '../component/services.js'
document.querySelector('#services').innerHTML = `
${services()}
`

import slider from '../component/slider.js'
document.querySelector('#slider').innerHTML = `
${slider()}
`

import about from '../component/about.js'
document.querySelector('#about').innerHTML = `
${about()}
`

import merit from '../component/merit.js'
document.querySelector('#merit').innerHTML = `
${merit()}
`
import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`


