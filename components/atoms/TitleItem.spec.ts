import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import TitleItem from '@/components/atoms/TitleItem.vue'

let wrapper: Wrapper<Vue>;

describe('画面レイアウト', () => {
    it('スナップショットテスト', () => {
        wrapper = mount(TitleItem, {
            localVue: createLocalVue(),
            vuetify: new Vuetify(),
            stubs: ['router-link']
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})