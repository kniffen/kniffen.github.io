<template lang="md">
  Years ago I bought this silly device thinking it would be a neat gadget to have in the office, however as with most of there things it got used for a little bit and then stored away.  
  Then one day I was browsing the internet and found this [instructables](https://www.instructables.com/id/Hack-a-cheap-usb-gadget-into-a-Color-Changing-Crys/) article showing someone had turned it into a glowing rock, and I thought I could probably do something similar.  
  Through the article I found a [repository](https://github.com/gbrayut/dreamcheekyusb) of an open source driver written in C# for the device, even though I would be using JavaScript it did provide various HEX sequences I needed in order to talk to the device.  
  <br/>

  But first off I needed to get the __vendorID__ and __productID__ of the device, this can be accomplished by using the [node-usb](https://github.com/tessel/node-usb) library and plugging in the device, then reading the data.  

  ```JS
  const usb = require('usb')

  usb.on('attach', function(device) {
    console.log(device)
  })
  ```

  And what we get is something like this.
  ```JSON
  Device {
    busNumber: 2,
    deviceAddress: 3,
    deviceDescriptor:
     { bLength: 18,
       bDescriptorType: 1,
       bcdUSB: 272,
       bDeviceClass: 0,
       bDeviceSubClass: 0,
       bDeviceProtocol: 0,
       bMaxPacketSize0: 8,
       idVendor: 7476,
       idProduct: 4,
       bcdDevice: 2,
       iManufacturer: 1,
       iProduct: 2,
       iSerialNumber: 0,
       bNumConfigurations: 1 },
    portNumbers: [ 1, 4 ] }
  ```

  As we can tell by the data the __vendorID__ is *7476* and the __productID__ is *4*.
  <br />
  <br />

  Now that I knew the __vendorID__ and __productID__ of the device I could easily tap into it and transfer data.  
  The initialization sequences seem to be needed to ensure that the device works when connecting it, there was also 4 of them but the first one worked for me.  
  You may need to try one of the other ones if you're doing this yourself.   
  The color sequence seems to be three RGB values followed by 5 other HEX values, I'm still not sure about the significance of these values.  

  ```JS
  const usb = require('usb')

  const vendorID = '7476'
  const productID = '4'

  // Initialization sequences
  const init01 = [0x1F, 0x02, 0x00, 0x5F, 0x00, 0x00, 0x1F, 0x03]
  const init02 = [0x00, 0x02, 0x00, 0x5F, 0x00, 0x00, 0x1F, 0x04]
  const init03 = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x05]
  const init04 = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]

  // Find device as application start in case it's already connected
  let webmailNotifier = usb.findByIds(vendorID, productID)

  function initiate() {
    const initBuffer = new Buffer.from(init01)

    webmailNotifier.open()

    // Initial transfer, needed to make the device accessible
    webmailNotifier.controlTransfer(0x21, 0x9, 0x200, 0x0, initBuffer, function(err) {
      if (err) return console.log(err)

      // Turn LED off
      changeColor([0x00, 0x00, 0x00])

      // Set color to red
      changeColor([0x80, 0x00, 0x00])
    })
  }

  function changeColor(rgb) {
    const colorBuffer = Buffer.from(rgb.concat([0xFF,0xFF,0xFF,0x1F,0x05]))
    webmailNotifier.controlTransfer(0x21, 0x9, 0x200, 0x0, colorBuffer)
  }

  if (webmailNotifier) {
    initiate()
  }

  // Initiate device when it connects to the computer
  usb.on('attach', device => {
    if (device.deviceDescriptor.idVendor == vendorID && device.deviceDescriptor.idProduct == productID) {
      webmailNotifier = device
      initiate()
    }
  })

  // Close and remove the device when it disconnects from the computer
  usb.on('detach', device => {
    if (device.deviceDescriptor.idVendor == vendorID && device.deviceDescriptor.idProduct == productID) {
      device.close()
      webmailNotifier = undefined
    }
  })
  ```
  <br />

  Here's a small demo application I made to demonstrate what you might be able to do with the device, if you're interested the source code is available on [GitHub](https://github.com/kniffen/Dream-Cheeky-USB-WebMail-Notifier)

  ![demo gif](/images/projects/dream-cheeky-usb-webmail-notifier/demo.gif)

  __Credits__  
  [Instructables](https://www.instructables.com/id/Hack-a-cheap-usb-gadget-into-a-Color-Changing-Crys/)  
  [codeplex](https://archive.codeplex.com/?p=dreamcheekyusb)  
</template>

<script>
  export default {
  
    name: 'Dream Cheeky USB WebMail Notifier'
  
  }
</script>