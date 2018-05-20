<template lang="pug">
  extends layout/BaseLayout.pug
  block content
    div
      //- Title
      h1.page-title 關於我們

      //- Menu
      div
        ul.list-inline
          li.list-inline-item
            router-link(:to="{name:'ClubIntroduction'}") 社團介紹
          li.list-inline-item
            router-link(:to="{name:'JoinUs'}") 加入我們
          li.list-inline-item
            router-link(:to="{name:'History'}") 歷史軌跡
          li.list-inline-item
            router-link(:to="{name:'Rule'}") 社團規章
          li.list-inline-item
            router-link(:to="{name:'Partner'}") 合作夥伴
          li.list-inline-item
            router-link(:to="{name:'Cadre'}") 歷屆幹部

      //- Main content
      div
        router-view(:key="$route.fullPath")
</template>
