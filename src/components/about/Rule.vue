<template lang="pug">
  div
    h2 社團規章
    div
      | （以下為當前最新版本：{{ ruleVersion | substring(0,8) }}，詳細變更紀錄請至 #[a(href='https://github.com/HackerSir/Articles-of-association' target='_blank') 這裡] 查詢）
    div.container
      div.card
        div.card-body.text-left
          vue-markdown(:source="rule")
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  data: function () {
    return {
      // 社規 commit 編號
      ruleVersion: '',
      rule: '<i class="fas fa-spinner fa-spin"></i> 載入中...'
    }
  },
  components: {
    VueMarkdown
  },
  mounted () {
    let vm = this
    // 由 GitHub 取得最新版本號
    this.$http.get('https://api.github.com/repos/HackerSir/Articles-of-association/commits/master')
      .then(function (response) {
        vm.ruleVersion = response.data.sha
        // 利用 RawGit https://rawgit.com/ 作為 CDN
        let ruleUrl = 'https://cdn.rawgit.com/HackerSir/Articles-of-association/' + vm.ruleVersion + '/rules.md'
        // 讀取 rules.md
        vm.$http.get(ruleUrl)
          .then(function (response) {
            vm.rule = response.data
          })
      })
  }
}
</script>
