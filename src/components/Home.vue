<template lang="pug">
  div
    //- Heading
    div.display-1 逢甲大學黑客社
    div.container
      div.row
        div.col
          //- Links
          div.list-group
            router-link(:to="{name:'About'}").list-group-item.list-group-item-action 關於我們
            router-link(:to="{name:'Activity'}").list-group-item.list-group-item-action 社團活動
            router-link(:to="{name:'Achievement'}").list-group-item.list-group-item-action 成果發表
        div.col
        div.col
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHackerSir.tw%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=367162860292923" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

</template>

<style scoped>
.display-1 {
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}
.list-group-item {
  font-size: 2rem;
}
</style>
