<template>
  <div id="app">
    <NavbarContent/>
      <router-view ></router-view>
    <FooterContent/>
  </div>
</template>

<script>

import NavbarContent from './../src/components/Header/Navbar/NavbarContent.vue'
import FooterContent from './../src/components/FooterContent.vue';
export default {
  name: 'App',
  components: {NavbarContent,FooterContent}
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 
}


</style>
