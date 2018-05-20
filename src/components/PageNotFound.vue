<template lang="pug">
  extends layout/BaseLayout.pug
  block content
    div
      //- Title
      h1.page-title 找不到該頁面
    div
      router-link(:to={name: 'Home'}) 返回首頁
</template>
