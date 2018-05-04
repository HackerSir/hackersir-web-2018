<template lang="pug">
  div
    //- Navbar
    div
      ul
        li
          router-link(:to="{name:'About'}") 關於我們

    //- Main content
    div
      h1 首頁
</template>
