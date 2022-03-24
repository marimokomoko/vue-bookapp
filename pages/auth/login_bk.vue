<template>
  <div>
    ログイン
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="email" label="メールアドレス" />
        <v-text-field v-model="password" label="パスワード" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn color="primary" class="mb-3" @click="login">ログイン</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn text to="./register">ユーザー登録</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      // 認証機能を使う
      const auth = getAuth(this.$firebase)
      // ログイン
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // 成功した場合
          console.log(userCredential.user)
          console.log('ユーザー登録ok!')
        })
        .catch((e) => {
          // 失敗した場合
          alert(e.message)
          console.error('error:', e)
        })
    },
  },
}
</script>

<style>
</style>