import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
if (process.env.NODE_ENV === "production") {
  Sentry.init({
    Vue,
    dsn: "https://1f01cb10508941d7a86aa5a36aa2c1ec@o4504315287175168.ingest.sentry.io/4504325859311616",
    logErrors: true,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "my-site-url.com", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    release: process.env.RELEASE_VERSION,
    environment: process.env.NODE_ENV,
  });
}
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
