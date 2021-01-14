<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="testbox">我是测试条，我的宽度是750px</div>
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />
  </div>
</template>

<style scoped>
.testbox {
  height: 100px;
  width: 750px;
  background-color: #00ff00;
}
</style>
