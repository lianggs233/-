<template>
  <div>{{ end | countDown }}</div>
</template>

<script>
export default {
  data () {
    return {
      end: '',
      timer: ''
    }
  },
  fliters: {
    countDown (val) {
      let totalTime = val
      let day = parseInt(totalTime / (24 * 60 * 60))
      let afterDay = totalTime - day * 24 * 60 * 60
      let hour = parseInt(afterDay / (60 * 60)) > 10 ? parseInt(afterDay / (60 * 60)) : '0' + parseInt(afterDay / (60 * 60))
      let afterhour = totalTime - day * 24 * 60 * 60 - hour * 60 * 60
      let min = parseInt(afterhour / 60) > 10 ? parseInt(afterhour / (60 * 60)) : '0' + parseInt(afterhour / 60)
      let aftermin = parseInt(totalTime - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60) > 10 ? parseInt(totalTime -
      day * 24 * 60 * 60 - hour * 60 * 60 - min * 60) : '0' + parseInt(totalTime - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60)
      let lastTime = day + '天' + hour + ':' + min + ':' + aftermin
      return lastTime
    }
  },
  methods: {
    test () {
      /* 处理倒计时 */
      /* let endtime = new Date(this.time).getTime()
      let nowtime = new Date().getTime */
      this.end = Math.floor((3600) / 1000)
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.end--
      }, 1000)
    }
  }
}
</script>
