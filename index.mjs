const app = Vue.createApp({
  components: {
    'my-layout': httpVueLoader('my-layout.vue')
  },
  setup() { return {} }
})
app.use(Quasar)
app.mount('#q-app')

console.log("hello")