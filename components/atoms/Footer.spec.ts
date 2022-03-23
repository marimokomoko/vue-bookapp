import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Footer from '@/components/atoms/Footer.vue'

let wrapper: Wrapper<Vue>;

describe('画面レイアウト', () => {
    it('スナップショットテスト', () => {
        wrapper = mount(Footer, {
            localVue: createLocalVue(),
            vuetify: new Vuetify(),
            stubs: ['router-link']
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})