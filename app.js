import sfc from './my-layout.js';

Vue.createApp({})
  .component('my-sfc', sfc)
  .use(Quasar)
  .mount("#q-app")