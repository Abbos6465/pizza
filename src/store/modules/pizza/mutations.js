export const mutations = {
    changePizzaFilter(state, payload){
        state.activePizzaFilter = payload;
    },

    changePizzaSort(state, payload){
        state.activePizzaSort = payload;
    }
}