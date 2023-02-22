import { createApp } from "vue";
import App from "./App.vue";
import './assets/style/global.css';
import router from "./router";

const app = createApp(App);

app.use(router)

app.mount("#app");

app.config.handleError = (err, instance, info) => {
  console.log(`An error ocurred: ${err}`);
}
