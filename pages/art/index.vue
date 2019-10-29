<template>
  <div class="listings">
    
    <a class="listing" v-for="artwork in artworks" :href="artwork.url">
      
      <div class="listing-title">
        <h2>{{artwork.name}}</h2>
      </div>

      <div class="listing-thumbnail">
        <img :src="artwork.thumbnail">
      </div>

    </a>

  </div>
</template>

<script>
  export default {
    name: 'Art Portfolio',

    data: function() {
      return {
        artworks: [
          {
            name:      "Mjolnir the hammer of Thor", 
            thumbnail: "/images/art/mjolnir/01.jpg", 
            url:       "https://www.redbubble.com/people/kniffen/works/39305029-mjolnir-the-hammer-of-thor?asc=u&p=poster"
          },
          {
            name:      "Rise of the Tomb Raider poster dersign", 
            thumbnail: "/images/art/rise-of-the-tomb-raider/01.jpg", 
            url:       "https://www.redbubble.com/people/kniffen/works/34715048-rise-of-the-tomb-raider?p=poster"
          },
          {
            name:      "Skull wearing a fedora", 
            thumbnail: "/images/art/skull-wearing-a-fedora/01.jpg", 
            url:       "https://www.designbyhumans.com/shop/skull-with-a-fedora/1034768/"
          },
          {
            name:      "Mermay 2018", 
            thumbnail: "/images/art/mermay-2018/01.jpg", 
            url:       "/images/art/mermay-2018/01.jpg"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .listing-thumbnail {
    background-color: #FFFFFF;
  }
</style>