
const Cryptr = require('cryptr');
const cryptra = new Cryptr('myTotalySecretKey');

var mongoose = require('mongoose');
const recordScreen = require('record-screen')
module.exports = {
    role_create,
   
}


async function role_create(userparms) {

    const recording = recordScreen('/tmp/test.mp4', {
        resolution: '1440x900' // Display resolution
      })
       
      recording.promise
        .then(result => {
          // Screen recording is done
          process.stdout.write(result.stdout)
          process.stderr.write(result.stderr)
        })
        .catch(error => {
          // Screen recording has failed
          console.error(error)
        })
       
      // As an example, stop the screen recording after 5 seconds:
      setTimeout(() => recording.stop(), 5000)
}
