<template>
  <div>
    <TitleItem>BookIndex</TitleItem>
    <v-row>
      <v-col cols="8">
        <v-btn color="primary" class="mb-3" to="/book/search">検索する</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn color="error" @click="deleteLocalStorage"> 削除する </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="book in books" :key="book.id" cols="12" md="6" class="mb-4">
        <v-card color="grey lighten-4">
          <v-row>
            <v-col cols="4">
              <v-img class="ml-3" :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              読んだ日: {{ book.readDate }}<br />
              感想: {{ book.memo }}
              <v-card-actions>
                <v-btn
                  :to="{ name: 'book-edit-id', params: { id: book.id } }"
                  color="indigo"
                  fab
                  small
                  dark
                  ><v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import TitleItem from '@/components/atoms/TitleItem.vue'
@Component({ components: { TitleItem } })
export default class BookIndex extends Vue {
  private test: boolean = true
  @Prop({type: Array, default: () => {}})
  books!: string // 感嘆符(!)を付けることで、TSに値が確実に割り当てられている事を伝えられる

  deleteLocalStorage() {
    // 削除：親へ渡す
    this.$emit('delete-local-storage')
  }
}
</script>

<style>
</style>