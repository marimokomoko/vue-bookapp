<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app color="purple lighten-5">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app color="purple lighten-2">
      <div v-show="isLoggedIn">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({})
export default class Header extends Vue {
  @Prop({type: Array,default: null})
  books!: string

  private drawer = false
  private items = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'BookList',
      to: '/book',
    },
    {
      title: 'Logout',
      to: '/auth/logout',
    },
  ]

  private title = '書籍管理アプリ'

  get isLoggedIn() {
    return this.$store.getters['auth/getLoggedIn']
  }
}
</script>

<style>
</style>