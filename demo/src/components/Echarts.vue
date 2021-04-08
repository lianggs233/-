<template>
  <el-col :span="12">
    <div id="chartLine"></div>
  </el-col>
</template>

<script>
/* import echarts from 'echarts' */
export default {
  data () {
  },
  methods: {
    drawLineChart () {
      const echarts = require('echarts')
      let myChart = echarts.init(document.getElementById('chartLine'))
      myChart.setOption({
        title: {
          text: '销量趋势图',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销量'],
          x: 'right'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        },
        yAxis: {
          type: 'value'
        },
        series:
                [{
                  name: '销量',
                  type: 'line',
                  // 设置折线图颜色
                  itemStyle: {
                    normal: {
                      lineStyle: {
                        color: '#4876FF'
                      }
                    }
                  },
                  stack: '总量',
                  data: [1, 2, 3, 4, 5, 6, 7]
                }]
      }
      )
    }
  },
  mounted () {
    this.drawLineChart()
  }
}
</script>
