<template>
<div>
  <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
</div>
</template>

<script>
export default {
  name: 'SIdentify',
  props: {
    identifyCode: {
      /* 默认注册码 */
      type: String,
      default: '1234'
    },
    fontSizeMin: {
      /* 字体最小值 */
      type: Number,
      default: 25
    },
    fontSizeMax: {
      type: Number,
      default: 35
    },
    backgroundColorMin: {
      /* 验证码图片背景色最小值 */
      type: Number,
      default: 200
    },
    backgroundColorMax: {
      type: Number,
      default: 300
    },
    dotColorMin: {
      /* 背景干扰最小值 */
      type: Number,
      default: 60
    },
    dotColorMax: {
      type: Number,
      default: 120
    },
    contentWidth: {
      /* 容器宽度 */
      type: Number,
      default: 90
    },
    contentHeight:{
      /* 容器高度 */
      type: Number,
      default: 38
    }
  },

  methods: {
    /* 随机生成一个数字 */
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
      /* Math,random()给我们返回一个0-1范围内的随机数 */
      /* Math.floor()砍到小数后的数值，获取整数 */
    },

    /* 生成一个随机颜色 */
    randomColor (min, max) {
      let r = this.randomNum(min, max)
      let g = this.randomNum(min, max)
      let b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },

    drawPic () {
      let canvas = document.getElementById('s-canvas')
      let ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      /* 绘制背景 */
      ctx.fillStyle = '#e6ecfd'
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      /* 绘制文字 */
    }
  },
}
</script>
