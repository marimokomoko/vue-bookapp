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
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      // actionを呼び出すときはdispatch('ファイル名/メソッド名'),{渡す値}
      // v-modelで入力した値がdataに入りdispatchでactionに渡す
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      })
    },
  },
}
</script>

<style>
</style>