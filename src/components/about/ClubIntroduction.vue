<template lang="pug">
  div
    h2.page-subtitle 社團介紹
    div.container
      div.card
        div.card-body
          h3 社團起源
          p 逢甲大學黑客社的前身是一個小型的讀書會，當初的是因國家資通安全競賽「金盾獎」而創立，原名「資通安全策進會」，經過一連串的傳承，演變成現在的「資訊安全策進會」。
          img.img-fluid(src='static/image/FISA.png')
          p 資訊安全策進會（FISA）是一群資工系的學生玩技術的小天堂，某天會議當中，黑客社初代社長提出了成立正式社團、把資安概念及技術從資工的框框移到全校，除了提供想學習資安概念及技術的學生一個合法的環境，同時也嘗試推翻普羅大眾對於黑客（駭客）的想法，提倡黑客精神並培養眾人動手做的能力。
          img.img-fluid(src='static/image/HackerSir.png')
          p 經過一番地討論，期間經過FISA成員的多次辯論，最終在2014年10月決議成立社團，也就是現在的「黑客社」，亦在同年12月，經逢甲大學核准成立觀察性社團，為資安推廣邁進了一大步。
      div.card
        div.card-body
          h3 社團目標
          h4 兩大目標
          div.row
            div.col
              div.container.supershape
                i.fas.fa-key.fa-2x
              h5 資訊安全
            div.col
              div.container.supershape
                i.fas.fa-cogs.fa-2x
              h5 黑客精神
          h4 四大支線
          div.row
            div.col
              div.container.supershape
                i.fas.fa-lock.fa-2x
              h5 推廣資安概念
            div.col
              div.container.supershape
                i.fas.fa-terminal.fa-2x
              h5 程式設計普及化
            div.col
              div.container.supershape
                i.fas.fa-code.fa-2x
              h5 提倡開放原始碼
            div.col
              div.container.supershape
                i.fas.fa-shield.fa-2x
              h5 建立安全的E化校園
      div.card
        div.card-body
          h3 目前現況
          p 黑客社正努力從校內開始，培養每個社員的資訊安全概念及意識，讓社員們了解到生活中常常被遺忘的資安危機，透過一些攻擊與防禦的理論與實作，讓社員們能夠了解到問題的嚴重性及抵擋方法；同時我們也推廣黑客精神，對於不好的或可以加強的現況進行改善，我們透過Python這個語言，讓社員有基本的能力去進行創作。
          p 除了社課，拓展資源、招收社員也是我們努力的目標，透過社員的加入，我們可以有更簡單的方法推廣這些理念，同時透過協助學校實行各種計畫，逐步把黑客精神散播到學校每個地方，達成推廣目的。
      div.card
        div.card-body
          h3 未來展望
          p 我們現在有兩大主線、四大支線的目標與許許多多的分支，如：推動投票的電子化、開放校園、資訊透明化，促使學生瞭解自身權益等。
          p 同時我們也希望能走出逢甲，目標將不再侷限於學生，而是改變現今大眾對於「駭客」的負面印象，使大眾了解資訊安全的重要性，進而建立安全的網路生態。
</template>

<style scoped>
div.supershape {
  height: 100px;
  width: 0;
  padding: 0;
  border-left: 50px solid #b7777f;
  border-right: 50px solid #b7777f;
  border-bottom: 25px solid transparent;
}
div.supershape i {
  transform: translate(-50%, 50%);
  -webkit-filter: drop-shadow(0px 0px 30px white);
  filter: drop-shadow(0px 0px 30px white);
}
h3::before, h3::after {
  content: "\f005"; /* fa-star */
  font-family: 'Font Awesome 5 Pro';
  font-weight: 900; /* fas */
}
img {
  max-width: 250px;
  margin: .5rem;
}
</style>
