import { createApp } from "vue";
import App from "./App.vue";

//这个项目的ui用的是vant的不过是按需引入的，具体用法参照
//https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart
//import { Button } from 'vant';
// vite-plugin-style-import 最后这个会变成按需引入

createApp(App).mount("#app");
