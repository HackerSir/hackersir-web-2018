<template lang="pug">
  div
    h2 社團規章
    div
      | （以下顯示版本：{{ ruleVersion }}，最新版本請至 #[a(href='https://github.com/HackerSir/Articles-of-association/blob/master/rules.md' target='_blank') rules.md] 查詢）
    div.container
      div.card
        div.card-body.text-left(v-html='rule')
</template>

<script>
export default {
  data: function () {
    return {
      // 社規 commit 編號
      ruleVersion: '4a57c208',
      rule: '<i class="fas fa-spinner fa-spin"></i> 載入中...'
    }
  },
  mounted () {
    let vm = this
    // 利用 RawGit https://rawgit.com/ 作為 CDN
    let ruleUrl = 'https://cdn.rawgit.com/HackerSir/Articles-of-association/' + this.ruleVersion + '/rules.md'
    this.$http.get(ruleUrl)
      .then(function (response) {
        let showdown = require('showdown')
        let converter = new showdown.Converter({
          noHeaderId: true
        })
        vm.rule = converter.makeHtml(response.data)
      })
  }
}
</script>
