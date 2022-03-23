import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Book from '@/pages/book.vue'
let wrapper: Wrapper<Vue>;

describe('画面レイアウト', () => {
    it('スナップショットテスト', () => {
        wrapper = mount(Book, {
            localVue: createLocalVue(),
            vuetify: new Vuetify(),
            stubs: ['router-link']
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})