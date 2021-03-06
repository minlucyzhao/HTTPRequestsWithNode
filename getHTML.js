var https = require('https');

function getHTML(options, callback) {
    https.get(options, function(response) {
        var appendedData = "";
        response.on('data', function(data) {
                appendedData += data;
        });
        response.on('end', function() {
            callback(appendedData);
        });
    });
}
  
function printHTML(html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML);