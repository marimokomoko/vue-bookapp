import { mount } from '@vue/test-utils'
import Edit from '@/pages/book/edit/_id.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Edit)
        expect(wrapper.html()).toMatchSnapshot()
    })
})