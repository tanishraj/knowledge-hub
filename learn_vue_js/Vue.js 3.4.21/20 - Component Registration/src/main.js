import { createApp } from "vue";
import App from "./App.vue";
import FirstGlobalComponent from "./components/FirstGlobalComponent.vue";
import SecondGlobalComponent from "./components/SecondGlobalComponent.vue";
import ThirdGlobalComponent from "./components/ThirdGlobalComponent.vue";

import "./assets/base.css";

const app = createApp(App);
app
  .component("FirstGlobalComponent", FirstGlobalComponent)
  .component("SecondGlobalComponent", SecondGlobalComponent)
  .component("ThirdGlobalComponent", ThirdGlobalComponent);

app.mount("#app");
