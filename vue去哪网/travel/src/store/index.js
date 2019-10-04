import Vue from 'vue'
import Vuex, { Store } from 'vuex'


Vue.use(Vuex)

export default new Store({
    state: {
        city: '帝国'
    },
    // actions: {
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations: {
        changeCity(state, city) {
            state.city = city
        }
    }
})