import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Index from '@/pages/book/index.vue'
let wrapper: Wrapper<Vue>;

describe('画面レイアウト', () => {
    it('スナップショットテスト', () => {
        wrapper = mount(Index, {
            localVue: createLocalVue(),
            vuetify: new Vuetify(),
            stubs: ['router-link']
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})