'use strict';

let search = document.querySelector('input[autocapitalize]');

if (search && search.value.match(/essay/)) {
    let content = document.querySelector('#rcnt');

    content.appendChild(createSquare(search.value));
}

function createSquare(value) {
    let square = document.createElement('div');

    let url = chrome.extension.getURL("images/th.jpeg");

    square.style.background = 'url(' + url + ')';
    square.style.position = 'absolute';
    square.style.boxSizing = 'border-box';
    square.style.width = '256px';
    square.style.height = '256px';
    square.style.top = '0px';
    square.style.right = '0px';
    square.style.padding = '10px';
    square.style.fontSize = '18px';
    square.textContent = value;

    return square;
}