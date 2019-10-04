import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import state from './state'
import mutations from './mutations'


Vue.use(Vuex)



export default new Store({
    state,
    // actions: {
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations,
})