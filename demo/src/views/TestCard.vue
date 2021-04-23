<template>
  <div>
    <el-card>
      <div slot="header">考试卡片</div>
      <div>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-card>
              <div slot="header" class="clearfix">
                <span>考试名称</span>
                <el-button type="text" style="float: right; padding: 3px 0">参加考试</el-button>
              </div>
              <div v-for="o in 4" :key="o">
                {{'考试内容 ' + o }}
                </div>
            </el-card>
          </el-col>
          <!-- <el-col :span="8">
            <el-card>
              <div slot="header" class="clearfix">
                <span>考试名称</span>
                <el-button type="text" style="float: right; padding: 3px 0">参加考试</el-button>
              </div>
              <div v-for="o in 4" :key="o">
                {{'考试内容 ' + o }}
                </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card>
              <div slot="header" class="clearfix">
                <span>考试名称</span>
                <el-button type="text" style="float: right; padding: 3px 0">参加考试</el-button>
              </div>
              <div v-for="o in 4" :key="o">
                {{'考试内容 ' + o }}
                </div>
            </el-card>
          </el-col> -->
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
