import '../scss/record.css'

import header from '../component/header.js'
document.querySelector('#header').innerHTML = `
${header()}
`

import record from '../component/onlinerecord.js'
const loadRecord = async () => {
  const container = await record();
  document.querySelector('#record').appendChild(container);
}
loadRecord();

import footer from '../component/footer.js'
document.querySelector('#footer').innerHTML = `
${footer()}
`
