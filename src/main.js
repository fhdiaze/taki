import { createApp } from "vue";
import App from "./App.vue";
import './assets/style/global.css';

const app = createApp(App).mount("#app");

app.config.handleError = (err, instance, info) => {
    console.log(`An error ocurred: ${err}`);
}
