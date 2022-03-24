import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const state = () => ({
    isLoggedIn: false,
    userUid: '',
    email: ''
})

// (vuexは actions -> mutations -> state の流れ)
// action   : ログイン後のユーザ情報を取得してcommitでmutationに渡す
// mutations: stateの値を置き換える

// mutations : stateを変更する (state, 入ってくる値)
export const mutations = {
    setLoginState(state, loggedIn) {
        state.isLoggedIn = loggedIn
    },
    setUserUid(state, userUid) {
        state.userUid = userUid
    },
    setEmail(state, email) {
        state.email = email
    }
}

export const actions = {
    async login({ commit }, payload) {
        const auth = getAuth(this.$firebase)
        // ログイン
        await signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then(userCredential => {
                // 成功した場合
                // ログイン後のユーザ情報を取得してcommitでmutationに渡す
                commit('setLoginState', true)
                commit('setUserUid', userCredential.user.uid)
                commit('setEmail', userCredential.user.email)
                console.log('ログインok!')
                this.$router.push('/book')
            })
            .catch(e => {
                // 失敗した場合
                alert(e.message)
            })
    },

    async logout({ commit }) {
        const auth = getAuth(this.$firebase)
        await signOut(auth)
            .then(() => {
                commit('setLoginState', false)
                commit('setUserUid', '')
                commit('setEmail', '')
                this.$router.push('/auth/login')
            })
            .catch(e => {
                console.log(e)
            })
    },

    // authenticatedで使う
    addUserInfo({ commit }, payload) {
        commit('setLoginState', true)
        commit('setUserUid', payload.uid)
        commit('setEmail', payload.email)
    }
}
// getters : gettersからstateの値をみる
export const getters = {
    getLoggedIn: state => !!state.isLoggedIn,
    getUserUid: state => state.userUid,
    getEmail: state => state.email
}
