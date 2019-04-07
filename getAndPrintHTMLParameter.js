var https = require('https');

function getAndPrintHTML(options) {
    https.get(options, function(response) {
        var appendedData = "";
        response.on('data', function(data) {
                appendedData += data;
        });

        response.on('end', function() {
            console.log(appendedData);
        });
    });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);