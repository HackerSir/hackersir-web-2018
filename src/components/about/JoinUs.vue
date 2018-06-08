<template lang="pug">
  div
    h2.page-subtitle 加入我們
    div.container
      div.card
        div.card-body.d-flex.flex-column
          h3.text-center 如果你有以下任一特質：
          div.align-self-center
            ul.list-unstyled.text-left
              li 喜愛新事物
              li 對資安有興趣
              li 喜歡 Coding
              li 想要改變世界從自己開始
              li 想當工程師
              li 有新鮮強壯的肝
          br
          h3.text-center 你可以......
          p.text-center
            a.btn.btn-lg.btn-outline-primary(role="button" href="javascript:void(0)" @click.prevent="clickJoinButton()") 加入我們！
</template>

<style scoped>
  li {
    font-size: 1.3rem
  }
  li::before {
    content: "\f14a"; /* fa-check-square */
    font-family: 'Font Awesome 5 Pro';
    font-weight: 400; /* far */
    margin-right: .2rem;
  }
</style>

<script>
export default {
  methods: {
    clickJoinButton: function () {
      alert('對不起，目前暫時不開放線上申請，請直接找幹部填入社單。\n你可以在社課、社內活動期間找到他們！')
    }
  }
}
</script>
