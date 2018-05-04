<template lang="pug">
  div
    //- Navbar
    div
      ul
        li
          router-link(:to="{name:'About'}") 關於我們
        li
          router-link(:to="{name:'Activity'}") 社團活動
        li
          router-link(:to="{name:'Achievement'}") 成果發表

    //- Main content
    div
      h1 首頁
</template>
