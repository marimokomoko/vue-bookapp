<template>
  <div>
    <NuxtChild
      :books="books"
      @add-book-list="addBook"
      @update-book-info="updateBookInfo"
      @delete-local-storage="deleteLocalStorage"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Book } from '@/types/book'
const STORAGE_KEY = 'books'
@Component({})
export default class BookHome extends Vue {
  // data
  private books: Book[] = [
    {
      id: 0,
      readDate: '',
      memo: '',
      title: '',
      image: '',
      description: '',
    },
  ]

  private newBook = null

  private created() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY)!)
      } catch (e) {
        // localStorage.removeItem(STORAGE_KEY)
      }
    } else {
      this.books = []
    }
  }

  private addBook(e: any) {
    this.books.push({
      id: this.books.length,
      title: e.title,
      image: e.image,
      description: e.description,
      readDate: '',
      memo: '',
    })
    this.saveBooks()
    // 最後に追加したidの取得コード
    this.goToEditPage(this.books.slice(-1)[0].id)
  }

  private removeBook(x: number) {
    this.books.splice(x, 1)
    this.saveBooks()
  }

  private saveBooks() {
    const parsed = JSON.stringify(this.books)
    localStorage.setItem(STORAGE_KEY, parsed)
  }

  private updateBookInfo(e: any) {
    const updateInfo = {
      id: e.id,
      readDate: e.readDate,
      memo: e.memo,
      title: this.books[e.id].title,
      image: this.books[e.id].image,
      description: this.books[e.id].description,
    }
    this.books.splice(e.id, 1, updateInfo)
    this.saveBooks()
    this.$router.push('/book')
  }

  private goToEditPage(id: number) {
    this.$router.push(`/book/edit/${id}`)
  }

  private deleteLocalStorage(deleteItem: any) {
    const isDeleted = '本当に削除してもよろしいですか？'
    if (window.confirm(isDeleted)) {
      if (localStorage.getItem(STORAGE_KEY)) {
        try {
          // 削除対象以外を抽出
          let bookList = JSON.parse(localStorage.getItem(STORAGE_KEY)!)
          console.log(
            bookList =
            bookList.filter(
              (data: { id: any }) => !deleteItem.includes(data.id)
            )
          )
          // ストレージへ格納
          localStorage.setItem(STORAGE_KEY, JSON.stringify(bookList))
        } catch (e) {
          // localStorage.removeItem(STORAGE_KEY)
        }
      }
      window.location.reload()
    }
  }
}
</script>

<style>
</style>