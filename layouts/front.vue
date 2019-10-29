<template>
  <div class="wrapper">
  
    <header>
      <Nav />
    </header>
  
    <nuxt />
  
  </div><!-- .wrapper -->
</template>

<script>
  import Nav from "@/components/Nav"

  export default {

    components: {Nav}

  }
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: var(--color-bg);
    min-height: 100vh;
    display: grid;
    grid-template-rows: minmax(0px, 100%);
  }

  .wrapper::before {
    position: fixed;
    background-image: repeating-linear-gradient(to bottom, transparent 0 ,transparent 2px, #222 2px, #222 4px);
    background-size: 100% 4px, cover;
    transform-origin: 50% 50%;
    transform: rotate(0deg);    
    content: '';
    opacity: .2;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 1000;
    pointer-events: none;
    animation: glitchVertical 2.5s infinite linear;
  }

  header {
    position: fixed;
    width: calc(100% - var(--spacing) * 2);
    display: grid;
    padding: var(--spacing);
    grid-template-columns: minmax(0, 1fr) 50px;
    animation: fadein 3s ease-in-out;  
  }

  .site-nav {
    grid-column: 2 / 3;
  }
</style>
