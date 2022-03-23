import Vue from 'vue'
import Vuetify from 'vuetify'
import {config , RouterLinkStub} from '@vue/test-utils'
Vue.use(Vuetify);
config.stubs.NuxtLink = RouterLinkStub;
config.mocks.$router= {
    push: jest.fn(),
    replace: jest.fn(),
    go: jest.fn(),
    back: jest.fn(),
    forward: jest.fn()
}