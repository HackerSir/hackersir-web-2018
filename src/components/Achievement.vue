<template lang="pug">
  extends layout/BaseLayout.pug
  block content
    div
      //- Title
      h1.page-title 成果發表

      //- Menu
      div
        ul.list-inline
          li.list-inline-item
            router-link(:to="{name:'ActivityRecord'}") 活動紀錄
          li.list-inline-item
            router-link(:to="{name:'Project'}") 社團專案

      //- Main content
      div
        router-view(:key="$route.fullPath")
</template>
