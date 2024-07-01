import './src/scss/admin.css';

import admin from './src/component/panel.js';

document.addEventListener('DOMContentLoaded', () => {


    const tableContainer = admin();
    document.body.appendChild(tableContainer);


});

