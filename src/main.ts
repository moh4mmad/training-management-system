import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { emitter } from "./bus";

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    emitter: typeof emitter;
  }
}

app.config.globalProperties.emitter = emitter;
app.mount("#app");
