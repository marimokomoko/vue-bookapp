<template>
  <v-footer :absolute="!fixed" app color="purple lighten-3">
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class Footer extends Vue {
  private fixed = false
}
</script>

<style>
</style>