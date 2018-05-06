<template lang="pug">
  div#app
    router-view(:key="$route.fullPath")

    //- Footer
    footer.footer
      div.container
        p.text-center
          | Copyright © 2018 Hackers' Club, Feng Chia University. All rights reserved.

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
