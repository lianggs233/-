<template>
  <el-container class="el-container">
      <el-aside class="el-aside">
        <Navbar></Navbar>
      </el-aside>
    <el-container>
      <el-header class="el-header">
        <Header></Header>
      </el-header>
      <el-main class="el-main">
      <div class="container_main" align="center" style="height=1000px">
        <Question></Question>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-container {
  height: 100%;
  overflow: auto;
}

.el-header {
  background-color:#545c64;
  color: #eee;
  line-height: 60px;
  height: 100%;
  text-align: right;
}

.el-aside {
  display: block;
  position: absolute;
  background-color:#545c64;
  left: 0;
  top: 60px;
  bottom: 0;
  min-height: 100%;
  width: auto;
  overflow-y: scroll;
}
.el-main{
  margin-left: 300px;
}
</style>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Question from '@/components/Question'
export default {
  components: {
    Navbar,
    Header,
    Question
  }
}
</script>
