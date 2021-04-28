<template>
  <div>
    <el-card>
      <div slot="header">考试卡片</div>
      <div class="testcard">
          <Cards v-for="id in test" :key="id" />
      </div>
    </el-card>
  </div>
</template>

<style>
.testcard{
  display: grid;
  grid-template-columns: repeat(3,33.33%);
  grid-template-rows: repeat(3,200px);
}
</style>

<script>
export default {
  components: {
    Cards: () => import('./modules/Cards')
  },
  data () {
    return {
      test: [{
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      },
      {
        id: 5
      },
      {
        id: 6
      },
      {
        id: 7
      },
      {
        id: 8
      },
      {
        id: 9
      }]
    }
  },
  methods: {
  },
  created () {
    let vm = this
    this.$axios.get('/'
    ).then(function (res) {
      vm.id = res.data.id
    })
  }
}
</script>
