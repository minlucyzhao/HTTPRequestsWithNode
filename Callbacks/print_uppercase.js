var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {
    newHTML = html.toUpperCase();
    console.log(newHTML);
}

getHTML(requestOptions, printUpperCase);