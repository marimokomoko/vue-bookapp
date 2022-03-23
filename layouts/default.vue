<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Header from '@/components/atoms/Header.vue'
import Footer from '@/components/atoms/Footer.vue'
@Component({
  components: {
    Header,
    Footer,
  },
})
export default class DefaultLayout extends Vue {
}
</script>
