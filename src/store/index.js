import { createStore } from "vuex";
import locale from "./modules/locale";
import pizza from "./modules/pizza";

const store = createStore({
    modules: {
        locale,pizza
    }
})

export default store;