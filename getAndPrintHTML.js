var https = require('https');

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    https.get(requestOptions, function(response) {
        var appendedData = "";
        response.on('data', function(data) {
                appendedData += data;
        });

        response.on('end', function() {
            console.log(appendedData);
        });
    });
  }

  getAndPrintHTML();