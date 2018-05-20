<template lang="pug">
  div#app.d-flex.flex-column
    router-view.pb-3(:key="$route.fullPath")

    //- Footer
    footer.footer.mt-auto
      div.container
        p.text-center.mb-0
          | Copyright © 2018 Hackers' Club, Feng Chia University. All rights reserved.

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);

#app {
  font-family: 'Noto Sans TC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > div {
  min-height: calc(100vh - 60px - 60px);
}

.page-title, .page-subtitle {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

.footer {
  background-color: gray;
  padding-top: 15px;
  padding-bottom: 15px;
}

.card {
  background: rgba(255, 255, 255, .75);
  margin-bottom: 1rem;
}
</style>
