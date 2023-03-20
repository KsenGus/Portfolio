window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let links = require('./parts/links.js'),
        menu = require('./parts/menu.js'),
        portfolio = require('./parts/portfolio.js');
    links();
    menu();
    portfolio();
});