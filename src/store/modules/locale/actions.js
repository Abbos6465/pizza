import i18n from "@/i18n";
import { setItem } from "@/utils/stroge";

export const actions = {
    changeLocale({commit}, locale) {
        i18n.locale = locale;
        commit("SET_LOCALE", locale);
        setItem('locale',locale);
        return locale;
    }
}