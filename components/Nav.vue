<template>
  <div class="site-nav">
    
    <input type="checkbox" id="site-nav-toggle" />

    <label for="site-nav-toggle" id="site-nav-toggle-label">
      <span></span>
    </label>

    <nav>
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/art">Art</a>
      <a href="/about">About</a>
    </nav>

  </div>
</template>

<style lang="scss" scoped>
  .site-nav {
    position: relative;
    justify-self: end;
  }

  #site-nav-toggle {
    display: none;
  }

  #site-nav-toggle-label {
    position: relative;
    display: block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    overflow: hidden;
    right: 0;

    span,
    span::before,
    span::after {
      background-color: var(--color-border);
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      transition: .3s ease-in-out;
    }

    span {
      top: -1px;
      bottom: 0;
      margin: auto;
      width: 60%;
      right: 0;

      &::before,
      &::after {
        content: '';
      }

      &::before {
        width: 140%;
        top: -8px;
        left: -14px;
      } 

      &::after {
        width: 120%;
        bottom: -8px;
        left: -12px;
      } 
    }

    &:hover span {
      width: 100%;

      &::before {
        width: 100%;
        left: 0;
      }

      &::after {
        width: 100%;
        left: 0;
      }
    }
  }

  nav {
    position: absolute;
    background-color: var(--color-bg);
    margin-top: calc(var(--spacing) * 0.5);
    padding: calc(var(--spacing) * 0.5);
    text-align: right;
    text-transform: uppercase;
    font-size: 1.2rem;
    overflow: hidden;
    display: grid;
    grid-gap: calc(var(--spacing) * 0.5);
    transition: right .5s ease-in-out;
    right: -2000px;

    > * {
      color: var(--color-text-3);
      text-decoration: none;
      transition: right .3s ease-in-out;

      &:hover {
        text-decoration: none;
        animation: glitchHorizontal 2s infinite linear;
      }
    }
  }

  #site-nav-toggle:checked ~ #site-nav-toggle-label{
    span,
    span::before,
    span::after {
      width: 100%;
    }

    span {
      height: 0;
    }

    span::before,
    span::after {
      top: 0;
      width: 35px;
      left: 0;
    }


    span::before {
      transform: rotate(45deg);
    }

    span::after {
      transform: rotate(-45deg);
    }
  }

  #site-nav-toggle:checked ~ nav {
    right: calc(var(--spacing) * -1);
  }

</style>