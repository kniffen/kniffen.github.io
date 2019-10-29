<template>
  <main>
  
    <img src="/images/logo.svg"  alt="kniffen logo"/>
    
    <span>Programming  /  Design  /  Art  /  DIY</span>

  </main>
</template>

<script>
  export default {
    
    layout: "front"

  }
</script>

<style scoped>
  main {
    width: calc(100% - var(--spacing) * 2);
    max-width: 500px;
    padding: var(--spacing);
    margin: auto;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-text-3);
    display: grid;
    grid-gap: calc(var(--spacing) / 2);
    animation: glitchHorizontal 2.5s infinite linear, fadein 3s ease-in-out;  
  }
</style>
