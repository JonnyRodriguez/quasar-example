
const app = Vue.createApp({
    data() {
        return {
            leftDrawerOpen: false,
        }
    },
    methods: {
        toggleLeftDrawer() {
            leftDrawerOpen.value = !leftDrawerOpen.value
        }
    }

})

app.use(Quasar)
Quasar.lang.set(Quasar.lang.es)
app.mount('#q-app')
