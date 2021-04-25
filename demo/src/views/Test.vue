<template>
  <div>
    <CountDown></CountDown>
    <ExamCards v-for="o in 4" :key="o" />
  </div>
</template>

<script>
export default {
  components: {
    ExamCards: () => import('./modules/ExamCards'),
    CountDown: () => import('./modules/CountDown')
  },
  data () {
    return {

    }
  }
}
</script>
