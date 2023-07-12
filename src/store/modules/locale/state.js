import { getItem } from "@/utils/stroge";

export const state = {
    locale: getItem('locale') == 'uz' || getItem('locale') == 'ru' || getItem('locale') == 'en' ? getItem('locale') : 'ru',
    locales: [
        {
            url:"uz",
            name:"O'zbekcha"
        },
        {
            url:"en",
            name:"English"
        },
        {
            url:"ru",
            name:"Русский"
        }
    ]
}