<template>
  <div>
    ログイン
    <v-row>
      <v-col cols="6">
        <!-- <v-text-field v-model="email" name="email" label="メールアドレス" /> -->

        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="メールアドレス"
          required
        ></v-text-field>

        <v-text-field v-model="password" :rules="[rules.required]" type="password" label="パスワード" />
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
      // email: 'email@email.com',
      password: '',

      rules: {
        required: (value) => !!value || '必須項目です',
        email: (value) => {
          return /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(value) || 'メールアドレスの形式で入力してください'
        },
        // bucketName: (value) => {
        //   return (
        //     /^[a-z0-9.-]{3,63}$/.test(value) ||
        //     'バケット名 のフォーマットが正しくありません'
        //   )
        // },
      },
    }
  },

  methods: {
    login() {
      // actionを呼び出すときはdispatch('ファイル名/メソッド名'),{渡す値}
      // v-modelで入力した値がdataに入りdispatchでactionに渡す
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style>
</style>