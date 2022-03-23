import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Header from '@/components/atoms/Header.vue'
let wrapper: Wrapper<Vue>;

describe('画面レイアウト', () => {
    it('スナップショットテスト', () => {
        wrapper = mount(Header, {
            // items: {
            //     icon: 'test',
            //     title: 'test',
            //     to: 'test'
            // },
            localVue: createLocalVue(),
            vuetify: new Vuetify(),
            stubs: ['router-link']
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})