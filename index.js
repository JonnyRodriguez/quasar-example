const app = Vue.createApp({
    setup() {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
})

app.use(Quasar)
Quasar.lang.set(Quasar.lang.es)
app.mount('#q-app')
