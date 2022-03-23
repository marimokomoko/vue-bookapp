<template>
  <v-row class="button">
    <v-col>
      <v-btn min-width="110" :to="url" :color="color">
        {{ buttonText }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({})
export default class ButtonItem extends Vue {
  @Prop({ type: String, required: true })
  buttonText!: string

  @Prop({ type: String, required: true })
  url!: string

  @Prop({ type: String, required: true })
  color!: string
}
</script>
