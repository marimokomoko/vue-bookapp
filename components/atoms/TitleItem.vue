<template>
    <h1><slot></slot></h1>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class TitleItem extends Vue {
}
</script>