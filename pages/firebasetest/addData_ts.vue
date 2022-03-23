<template>
  <div>
    <v-btn @click="addData">追加</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
@Component({ components: {} })
export default class addData extends Vue {
  private id = '001'
  private title = 'テスト'

  async addData() {
    try {
      //   const db = getFirestore(this.$firebase)
      const db = getFirestore(this.$firebase)
      console.log(db)
      const docRef = await addDoc(collection(db, 'tasks'), {
        id: this.id,
        title: this.title,
      })
      console.log('追加したデータのID:', docRef.id)
    } catch (e) {
      console.error('error:', e)
    }
  }
}
</script>

<style>
</style>