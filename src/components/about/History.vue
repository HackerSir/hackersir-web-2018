<template lang="pug">
  div
    h2 歷史軌跡
    div.container
      div.d-flex.justify-content-center
        div.timeline
          div.timeline-item(v-for='timelineEvent in timelineEvents')
            div.timeline-item-date
              span.badge.badge-pill.badge-secondary {{ timelineEvent.date }}
            div.timeline-item-divider
            div.timeline-item-content
              div
                | {{ timelineEvent.title }}
                a(:href='timelineEvent.link' v-if='timelineEvent.link' target='_blank' title='相關連結') #[i.fas.fa-link.ml-1]
              div(v-if='timelineEvent.description')
                small {{ timelineEvent.description }}
              div(v-if='timelineEvent.image')
                a(:href='timelineEvent.image' target='_blank' title='檢視原圖')
                  img.timeline-item-image(:src='timelineEvent.image')

</template>

<style scoped>
.timeline {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.timeline-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.timeline-item-date {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 120px;
  text-align: right;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.timeline-item-divider {
  position: relative;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  margin-top: 8px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.timeline-item-divider:before {
  bottom: 100%;
}
.timeline-item:first-child .timeline-item-divider:before {
  display: none;
}
.timeline-item-divider:after {
  top: 100%;
}
.timeline-item:last-child .timeline-item-divider:after {
  display: none;
}
.timeline-item-divider:after,
.timeline-item-divider:before {
  content: " ";
  width: 5px;
  height: 100vh;
  position: absolute;
  left: 50%;
  background: inherit;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}
.timeline-item-content {
  margin: 2px;
  margin-bottom: 10px;
  min-width: 0;
  position: relative;
  text-align: left;
  -webkit-flex-shrink: 10;
  -ms-flex-negative: 10;
  flex-shrink: 10;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px;
  border-radius: 5px;
}
.timeline-item-image {
  max-width: 200px;
  max-height: 200px;
  border: 0;
}
</style>

<script>
var moment = require('moment')
export default {
  data: function () {
    return {
      timelineEvents: [
        {
          date: moment().format('YYYY-MM-DD'),
          title: '更多活動載入中...'
        },
        {
          date: '2014-12-25',
          title: '社團成立',
          image: 'http://hackersir.org/2015/img/logo/HackerSir.png',
          description: '黑客社成立囉ヾ(@°▽°@)ノ',
          link: 'https://hackersir.org'
        }
      ]
    }
  },
  mounted () {
    this.$http.get('static/data/timeline.json').then(response => {
      this.timelineEvents = response.data
    })
  }
}
</script>
