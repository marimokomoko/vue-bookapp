<template>
  <div>
    <TitleItem>BookSearch</TitleItem>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="keyword" label="本のタイトルを検索" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn color="primary" class="mb-3" @click="search(keyword)"
          >検索する</v-btn
        >
      </v-col>
      <v-col cols="3">
        <ButtonItem :button-text="buttonText" :url="url" :color="color" />
      </v-col>
    </v-row>
    <div v-show="!isFound" class="mt-4">検索結果は０件でした。</div>
    <v-row>
      <v-col
        v-for="(book, index) in searchResults"
        :key="index"
        cols="12"
        md="6"
      >
        <v-card class="mx-auto mb-4">
          <v-row>
            <v-col cols="4">
              <v-img class="ml-3" :src="book.image"></v-img>
            </v-col>
            <v-col col="8">
              <v-card-title>{{ book.title }}</v-card-title>
              {{ book.description }}
              <v-spacer />
              <v-card-actions>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  color="indigo"
                  @click="addBookList(index)"
                >
                  <v-icon dark> mdi-plus </v-icon>
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
import { Vue, Component } from 'nuxt-property-decorator'
import TitleItem from '@/components/atoms/TitleItem.vue'
import ButtonItem from '@/components/atoms/ButtonItem.vue'
@Component({ components: { TitleItem, ButtonItem } })
export default class BookSearch extends Vue {
  // data
  private keyword = ''
  private searchResults: Object[] = []
  private isFound = true // 検索結果0の時に使用
  private buttonText = '一覧に戻る'
  private url = '/book'
  private color = 'secondary'
  private params = {}

  addBookList(index: any) {
    this.$emit('add-book-list', this.searchResults[index])
  }

  async search(keyword: string) {
    this.searchResults = []
    // クエリーストリングを作成
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
    this.params = {
      q: `intitle:${keyword}`,
      maxResults: 40,
    }
    const queryParams = new URLSearchParams(this.params)

    // axios : importは必要ない(NuxtPJ作成時にaxiosを導入したため。nuxt.comfig.jsにすでに追加されている)
    const response = await this.$axios.$get(baseUrl + queryParams)

    // 検索結果がない場合
    if (response.items === undefined) {
      this.isFound = false
    } else {
      this.isFound = true
      // 必要な情報を配列にpush
      for (const book of response.items) {
        const title = book.volumeInfo.title
        const img = book.volumeInfo.imageLinks
        const description = book.volumeInfo.description
        this.searchResults.push({
          title: title || '',
          image: img ? img.thumbnail : '',
          description: description ? description.slice(0, 40) : '',
        })
      }
    }
  }
}
</script>

<style>
</style>