var https = require('https');

module.exports = function getHTML(options, callback) {
        var appendedData = "";
        https.get(options, function(response) {
            response.on('data', function(data) {
                    appendedData += data;
            });
            response.on('end', function() {
                callback(appendedData);
            });
        });
}