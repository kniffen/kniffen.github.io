<template>
  <div class="listings">
    
    <a class="listing" v-for="project in projects" :href="project.url">

      <div class="listing-title">
        <h2>{{project.name}}</h2>
      </div>

      <div class="listing-thumbnail">
        <img :src="project.thumbnail">
      </div>

    </a>

  </div>
</template>

<script>
  export default {
    name: 'projects',

    props: [],

    data: function() {
      return {
        projects: [
          {
            name:      "FullStream", 
            thumbnail: "/images/thumbnails/fullstream.jpg", 
            url:       "/projects/fullstream"
          },
          {
            name:      "TruckSim Telemetry", 
            thumbnail: "/images/thumbnails/trucksim-telemetry.jpg", 
            url:       "http://trucksimtelemetry.kniffentechnologies.net"
          },
          {
            name:      "BPM detector", 
            thumbnail: "/images/thumbnails/bpm-detector.png", 
            url:       "https://bpmdetector.net/"
          },
          {
            name:      "Dream Cheeky USB WebMail Notifier", 
            thumbnail: "/images/thumbnails/dream-cheeky-usb-webmail-notifier.gif", 
            url:       "/projects/dream-cheeky-usb-webmail-notifier"
          }
        ]
      }
    }
  }
</script>