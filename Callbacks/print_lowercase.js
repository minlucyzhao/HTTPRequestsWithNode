var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
    html.toLowerCase();
    console.log(html);
}

getHTML(requestOptions, printLowerCase);