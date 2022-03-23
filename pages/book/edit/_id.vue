<template>
  <div>
    <TitleItem>BookEdit</TitleItem>
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img class="ml-3" :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{ book.title }}</v-card-title>
              読んだ日:
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  locale="jp-ja"
                  :day-format="(date) => new Date(date).getDate()"
                  @input="menu = false"
                ></v-date-picker>
              </v-menu>
              メモ:
              <v-textarea v-model="book.memo" class="mx-2">
                {{ book.memo }}</v-textarea
              >
              <v-card-actions>
                <v-btn color="secondary" to="/book">一覧に戻る</v-btn>
                <v-btn color="info" @click="updateBookInfo">保存する</v-btn>
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
import VueRouter from 'vue-router'
import TitleItem from '@/components/atoms/TitleItem.vue'
import ButtonItem from '@/components/atoms/ButtonItem.vue'
// Hook しないとbeforeRouteEnterが使えない
Component.registerHooks(['beforeRouteEnter'])
@Component({ components: { TitleItem, ButtonItem } })
export default class BookEdit extends Vue {
  // data
  private book: any = {}
  private date = ''
  private menu = false
  private buttonText = '一覧に戻る'
  private url = '/book'
  private color = 'secondary'

  @Prop({type: Array,default: () => {},})
  books!: string // 感嘆符(!)を付けることで、TSに値が確実に割り当てられている事を伝えられる

  // 表示を遅らせる(BookよりもEditが先に表示されるとうまくデータが渡せないため)
  beforeRouteEnter(to: VueRouter, from: VueRouter, next: any) { // eslint-disable-line
    next((vm: any) => {
      vm.book = vm.books[vm.$route.params.id]
      if (vm.book.readDate) {
        vm.date = vm.book.readDate
      } else {
        vm.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      }
    })
  }

  updateBookInfo() {
    this.$emit('update-book-info', {
      id: this.$route.params.id,
      readDate: this.date,
      image: this.book.img,
      memo: this.book.memo
    })
  }
}
</script>

<style>
</style>