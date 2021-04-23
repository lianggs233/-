<template id="navbar">
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    ><!-- default-active激活index  router是否用vue-router模式，以index做完path跳转 -->
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">题目管理</span>
        </template>
        <el-menu-item index="/home/question">
          <template slot="title">题库管理</template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">试卷管理</span>
        </template>
          <el-menu-item index="/home/testcard">试卷卡片</el-menu-item>
          <el-menu-item index="/home/querytest">查询试卷</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">课程管理</span>
        </template>
          <el-menu-item index="/home/course">查询课程</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">成绩管理</span>
        </template>
          <el-menu-item index="/home/queryresults">查询成绩</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">AI分析</span>
        </template>
          <el-menu-item index="/home/echarts">成绩分析统计</el-menu-item>
          <el-menu-item index="/home">试卷分析</el-menu-item>
          <el-menu-item index="/home">AI提高</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: auto;
}
</style>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
