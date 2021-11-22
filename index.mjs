
const app = Vue.createApp({
    setup() {
        return {
            leftDrawerOpen = false,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
})

app.use(Quasar)
Quasar.lang.set(Quasar.lang.es)
app.mount('#q-app')
