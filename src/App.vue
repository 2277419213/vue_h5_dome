<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* 解决苹果不现实图片问题 */
img {
  content: normal !important;
}
body {
  margin: 0;
  padding: 0;
}
</style>
