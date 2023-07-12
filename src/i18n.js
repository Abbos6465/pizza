import { createI18n } from 'vue-i18n';

import uz from './lang/uz.json';
import en from './lang/en.json';
import ru from './lang/ru.json';
import { getItem } from '@/utils/stroge';

const langStorage = getItem('locale');
const defaultLocale = import.meta.env.VITE_APP_I18N_LOCALE



export default createI18n({
	locale: langStorage ?? defaultLocale,
	falbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'ru',
	messages: { uz, en, ru }
})
