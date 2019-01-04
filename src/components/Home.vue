<template lang="pug">
  div
    //- Heading
    h1.p-2.display-1.d-none.d-md-block 逢甲大學黑客社
    h1.p-2.display-3.d-md-none 逢甲大學黑客社
    div.container
      div.row
        div.col-12.col-md-4
          //- Links
          div.list-group
            router-link.list-group-item.list-group-item-action(:to="{name:'ClubIntroduction'}") 關於我們
            router-link.list-group-item.list-group-item-action(:to="{name:'Activity'}") 社團活動
            router-link.list-group-item.list-group-item-action(:to="{name:'ActivityRecord'}") 成果發表
          div.row.mb-2
            div.col
              a.link-icon(href='https://www.facebook.com/groups/HackerSir/' target='_blank' title='FB公開社團') #[i.fab.fa-facebook-square.fa-3x.fa-fw]
              a.link-icon(href='https://github.com/HackerSir' target='_blank' title='GitHub') #[i.fab.fa-github.fa-3x.fa-fw]
              a.link-icon(href='https://gitlab.com/HackerSir' target='_blank' title='GitLab') #[i.fab.fa-gitlab.fa-3x.fa-fw]
              a.link-icon(href='https://www.youtube.com/channel/UCeDnuTpnq_4As-ceZiWsi4A' target='_blank' title='YouTube') #[i.fab.fa-youtube.fa-3x.fa-fw]
        div.col-12.col-md-4.offset-md-4
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
a.link-icon {
  color: #9b0e27;
}
a.link-icon:hover {
  color: #c60d25;
}
</style>
