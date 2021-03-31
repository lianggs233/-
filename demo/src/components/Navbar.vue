<template id="navbar">
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">题目管理</span>
        </template>
        <el-submenu index="1-1">
          <span slot="title">题库管理</span>
          <el-menu-item index="1-1-1">上传题库</el-menu-item>
          <el-menu-item index="1-1-2">查询题库</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-2">
          <template slot="title">题型管理</template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">试卷管理</span>
        </template>
          <el-menu-item index="2-1">生成试卷</el-menu-item>
          <el-menu-item index="2-2">查询试卷</el-menu-item>
          <el-menu-item index="2-3">修改试卷</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">课程管理</span>
        </template>
          <el-menu-item index="3-1">查询课程</el-menu-item>
          <el-menu-item index="3-2">修改课程</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">成绩管理</span>
        </template>
          <el-menu-item index="4-1">查询成绩</el-menu-item>
          <el-menu-item index="4-2">修改成绩</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-d-caret"></i>
          <span slot="title">AI分析</span>
        </template>
          <el-menu-item index="5-1">成绩分析统计</el-menu-item>
          <el-menu-item index="5-2">试卷分析</el-menu-item>
          <el-menu-item index="5-3">AI提高</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: auto;
}
</style>
<script>
export default {
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
