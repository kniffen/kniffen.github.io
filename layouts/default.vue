<template>
  <div class="wrapper">
  
    <header class="site-header">
      <a href="/" class="logo">
        <img src="/images/logo.svg" />
      </a>
      <Nav />
    </header>
  

    <main>
      <header class="content-header">
        <h1>{{$route.matched[0].components.default.extendOptions.name}}</h1>
      </header>
  
      <nuxt />

      <Footer />
    </main>
  </div><!-- .wrapper -->
</template>

<script>
  import Nav    from "@/components/Nav"
  import Footer from "@/components/Footer"

  export default {

    components: {Nav, Footer},

    mounted: function() {
      console.log(this.$route.matched)
    }

  }
</script>

<style lang="scss" scoped>  
  .site-header {
    position: fixed;
    top: 0;
    background: var(--color-bg);
    width: calc(100% - var(--spacing) * 2);
    display: grid;
    padding: var(--spacing);
    grid-template-columns: minmax(0, 1fr) 50px;
    z-index: 100;
  }

  .logo {
    height: 20px;
    align-self: center;

    img {
      height: 100%;
      width: auto;
    }
  }

  main {
    display: grid;
    margin-top: calc(35px + var(--spacing) * 2);
    padding: var(--spacing);
    min-height: 100vh;
    align-content: start;
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
    grid-template-columns: minmax(0, 100%);
  }

  .content-header {
    text-align: center;
  }

  @media (min-width: 1200px) {
    main {
      max-width: 1200px;
      margin-right: auto;
      margin-left: auto;
    }
  }  
</style>
