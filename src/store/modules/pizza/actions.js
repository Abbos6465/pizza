export const actions = {
    changePizzaFilter({commit}, data) {
        return new Promise((resolve,reject) => {
            commit('changePizzaFilter',data);
        })
    },
    
    changePizzaSort({commit}, data) {
        return new Promise((resolve,reject) => {
            commit('changePizzaSort',data);
        })
    }
}