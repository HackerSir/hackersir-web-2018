<template lang="pug">
  extends ../layout/BaseLayout.pug
  block content
    div
      //- Title
      h1 關於我們

      //- Navbar
      div
        ul
          li
            router-link(:to="{name:'ClubIntroduction'}") 社團介紹
          li
            router-link(:to="{name:'JoinUs'}") 加入我們
          li
            router-link(:to="{name:'History'}") 歷史軌跡
          li
            router-link(:to="{name:'Rule'}") 社團規章

      //- Main content
      div
        router-view(:key="$route.fullPath")
</template>
