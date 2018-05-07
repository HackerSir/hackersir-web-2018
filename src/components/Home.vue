<template lang="pug">
  div
    //- Heading
    h1.p-2.display-1.d-none.d-md-block 逢甲大學黑客社
    h1.p-2.display-3.d-md-none 逢甲大學黑客社
    div.container
      div.row
        div.col-12.col-md
          //- Links
          div.list-group
            router-link.list-group-item.list-group-item-action(:to="{name:'ClubIntroduction'}") 關於我們
            router-link.list-group-item.list-group-item-action(:to="{name:'Activity'}") 社團活動
            router-link.list-group-item.list-group-item-action(:to="{name:'ActivityRecord'}") 成果發表
        div.col-12.col-md
        div.col-12.col-md
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHackerSir.tw%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=367162860292923" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

</template>

<style scoped>
.display-1 {
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}
.display-3 {
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}
.list-group-item {
  font-size: 2rem;
}
</style>
