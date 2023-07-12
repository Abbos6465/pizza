import { setItem } from "@/utils/stroge"

export const mutations = {
    SET_LOCALE: (state, locale) => {
        setItem('locale',locale);
        state.locale = locale;
    }
}