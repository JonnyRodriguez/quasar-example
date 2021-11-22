export default {
  data() {
    return { leftDrawerOpen: false }
  },
  methods: {
    toggleLeftDrawer() {
      console.log('click')
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  },
  template:`
    <q-layout view="hhh lpr fff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
            Titulo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        1<br>
        2<br>
        <!-- drawer content -->
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

    </q-layout>
  `

  }
