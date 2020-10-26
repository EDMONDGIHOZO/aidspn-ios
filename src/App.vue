<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">


// Import custom SASS variable overrides, or alternatively
$primary: #2AAAE2;
$secondary: #F26622;
// define your variable overrides here instead
@import 'assets/custom-vars.scss';
// Import Bootstrap and BootstrapVue source SCSS files
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
