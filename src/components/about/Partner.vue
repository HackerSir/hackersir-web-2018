<template lang="pug">
  div
    h2.page-subtitle 合作夥伴
    div.container
      div.card
        div.card-body
          p(style={'font-size':'20px'}) 我們有許許多多的合作夥伴，他們來自世界各地，四面八方。感謝有他們，和我們並肩走來！
      div.card(v-for="(partnersOfType, partnerType) in partners")
        div.card-body
          h3 {{ partnerType }}
          div.d-md-flex(v-for="partner in partnersOfType")
            div
              img.img-fluid(:src='partner.image')
            div.text-left
              h3.text-center.text-md-left {{ partner.name }}
              h4.text-center.text-md-left {{ partner.cht_name }}
              p(v-for="descriptionParagraph in partner.description")
                | {{ descriptionParagraph }}
</template>

<style scoped>
img {
  max-width: 250px;
  margin: 0.5rem;
}
</style>

<script>
export default {
  data: function () {
    return {
      partners: {}
    }
  },
  mounted () {
    this.$http.get('static/data/partners.json').then(response => {
      this.partners = response.data
    })
  }
}
</script>
