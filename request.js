var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

       .on('error', function (err) {
         throw err;
       })

       .on('response', function (response) {
          console.log('Downloading image...')
           console.log('Response Status Message: ', response.statusMessage)
           console.log('Headers', response.headers['content-type']);
       })
       .on('end', function() {console.log('Download Complete!!')})
       .pipe(fs.createWriteStream('./future.jpg'));