<template>
  <div>
    <el-card>
      <div slot="header">考试卡片</div>
      <div class="testcard">
          <Cards v-for="o in 9" :key="o" />
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
    return {}
  }
}
</script>
