const express = require('express');
const router = express.Router();

const roleservice = require('./role.service.ts')
const recordScreen = require('record-screen')
var ffmpeg = require('ffmpeg');
// routes
router.post('/createrole', createrole);




module.exports = router;

 function createrole(req,res,next){
  const path = require('path')
  // const screenshot = require('..')
  const screenshot = require('screenshot-desktop')

  screenshot.listDisplays()
  .then((displays) => {
    console.log(displays)
    for (let index = 0; index < displays.length; index++) {
      const display = displays[index]
      const imgpath = path.join('Screenshort', Date.now() + '_' + index + '.png')
      screenshot({ screen: display.id, filename: imgpath }).then((imgpath) => {
        console.log(imgpath)
      }).catch(err => {
        console.error(err)
      })
    }
  })

// screenshot.listDisplays()
//   .then((displays) => {
//     console.log(displays)
//     for (let index = 0; index < displays.length; index++) {
//       const display = displays[index]
//       screenshot({ screen: display.id }).then((imgbuf) => {
//         console.log(imgbuf)
//       }).catch(err => {
//         console.error(err)
//       })
//     }
//   })


}

