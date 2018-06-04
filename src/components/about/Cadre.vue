<template lang="pug">
  div
    h2.page-subtitle 歷屆幹部
    div.container
      div.card
        div.card-body
          ul.nav.nav-wizard
            li(v-for="(nthYearCadres, nthYear) in cadres" :class="{'active':nthYear == selectedYear}")
              router-link(:to="{name:'Cadre', params:{year:nthYear}}") 第{{ nthYear }}屆
      div.d-flex(v-if="selectedYear")
        div
          div.card
            div.card-body.d-flex(:class="{'flex-column': selectedCadre != undefined}")
              div(v-for="(cadre, nthCadre) in cadres[selectedYear]")
                router-link.avatar.m-1(:to="{name:'Cadre', params:{year: selectedYear, cadre: nthCadre}}" :style="{ 'background-image': 'url(' + cadre.avatar + ')' }")
                  span.avatar-title {{ cadre.job }}
                  span.avatar-nickname {{ cadre.nickname || cadre.name }}
        div.ml-2.flex-grow-1(v-if="selectedCadreData")
          div.card
            div.card-body.d-flex
              img.img-thumbnail.mr-2(:src="selectedCadreData.image")
              div.w-100
                h1 {{ selectedCadreData.nickname || selectedCadreData.name }}
                ul.text-left
                  li 本名：{{ selectedCadreData.name }}
                  li 職稱：{{ selectedCadreData.job }}
                  li 科系：{{ selectedCadreData.department }}
                p.text-left {{ selectedCadreData.description }}
</template>

<style scoped>
.avatar-list {
  display: flex;
}
.avatar {
  margin: 2px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: black 1px solid;
  background: no-repeat center center / contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  text-decoration: none;
  color: black;
}
.avatar > .avatar-title,
.avatar > .avatar-nickname {
  background: rgba(255, 255, 255, 0.7);
}
.avatar:hover > .avatar-title,
.avatar:hover > .avatar-nickname {
  font-size: 1.2rem;
}
.nav-wizard > li {
  float: left;
}
.nav-wizard > li > a {
  position: relative;
  background-color: #eeeeee;
  display: block;
  padding: 10px 15px;
}
.nav-wizard > li > a .badge {
  margin-left: 3px;
  color: #eeeeee;
  background-color: #428bca;
}
.nav-wizard > li:not(:first-child) > a {
  padding-left: 34px;
}
.nav-wizard > li:not(:first-child) > a:before {
  width: 0px;
  height: 0px;
  border-top: 20px inset transparent;
  border-bottom: 20px inset transparent;
  border-left: 20px solid #ffffff;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
}
.nav-wizard > li:not(:last-child) > a {
  margin-right: 6px;
}
.nav-wizard > li:not(:last-child) > a:after {
  width: 0px;
  height: 0px;
  border-top: 20px inset transparent;
  border-bottom: 20px inset transparent;
  border-left: 20px solid #eeeeee;
  position: absolute;
  content: "";
  top: 0;
  right: -20px;
  z-index: 2;
}
.nav-wizard > li:first-child > a {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.nav-wizard > li:last-child > a {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.nav-wizard > li.done:hover > a,
.nav-wizard > li:hover > a {
  background-color: #d5d5d5;
}
.nav-wizard > li.done:hover > a:before,
.nav-wizard > li:hover > a:before {
  border-right-color: #d5d5d5;
}
.nav-wizard > li.done:hover > a:after,
.nav-wizard > li:hover > a:after {
  border-left-color: #d5d5d5;
}
.nav-wizard > li.done > a {
  background-color: #e2e2e2;
}
.nav-wizard > li.done > a:before {
  border-right-color: #e2e2e2;
}
.nav-wizard > li.done > a:after {
  border-left-color: #e2e2e2;
}
.nav-wizard > li.active > a,
.nav-wizard > li.active > a:hover,
.nav-wizard > li.active > a:focus {
  color: #ffffff;
  background-color: #428bca;
}
.nav-wizard > li.active > a:after {
  border-left-color: #428bca;
}
.nav-wizard > li.active > a .badge {
  color: #428bca;
  background-color: #ffffff;
}
.nav-wizard > li.disabled > a {
  color: #777777;
}
.nav-wizard > li.disabled > a:hover,
.nav-wizard > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  background-color: #eeeeee;
  cursor: default;
}
.nav-wizard > li.disabled > a:before {
  border-right-color: #eeeeee;
}
.nav-wizard > li.disabled > a:after {
  border-left-color: #eeeeee;
}
.nav-wizard.nav-justified > li {
  float: none;
}
.nav-wizard.nav-justified > li > a {
  padding: 10px 15px;
}
@media (max-width: 768px) {
  .nav-wizard.nav-justified > li > a {
    border-radius: 4px;
    margin-right: 0;
  }
  .nav-wizard.nav-justified > li > a:before,
  .nav-wizard.nav-justified > li > a:after {
    border: none !important;
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      selectedYear: null,
      selectedCadre: null,
      selectedCadreData: null,
      cadres: {}
    }
  },
  mounted () {
    this.$http.get('static/data/cadres.json').then(response => {
      this.cadres = response.data
      this.selectedYearUpdated()
      this.selectedCadreUpdated()
    })
  },
  watch: {
    '$route.params.year': function (year) {
      this.selectedYearUpdated()
    },
    '$route.params.cadre': function (cadre) {
      this.selectedCadreUpdated()
    }
  },
  methods: {
    selectedYearUpdated: function () {
      this.selectedYear = this.$route.params.year
      this.selectedCadreDataUpdated()
    },
    selectedCadreUpdated: function () {
      this.selectedCadre = this.$route.params.cadre
      this.selectedCadreDataUpdated()
    },
    selectedCadreDataUpdated: function () {
      if (this.selectedYear != null && this.selectedCadre != null) {
        this.selectedCadreData = this.cadres[this.selectedYear][this.selectedCadre]
      } else {
        this.selectedCadreData = null
      }
    }
  }
}
</script>
