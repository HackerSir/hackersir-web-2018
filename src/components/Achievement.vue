<template lang="pug">
  extends layout/BaseLayout.pug
  block content
    div
      //- Title
      h1 成果發表

      //- Navbar
      div
        ul
          li
            router-link(:to="{name:'ActivityRecord'}") 活動紀錄
          li
            router-link(:to="{name:'Project'}") 社團專案

      //- Main content
      div
        router-view(:key="$route.fullPath")
</template>
