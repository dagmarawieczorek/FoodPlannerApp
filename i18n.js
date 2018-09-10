import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import en from "./locales/en";
import pl from "./locales/pl";

// Import all locales

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
I18n.defaultLocale = 'en';

// Define the supported translations
I18n.translations = {
    en,
    pl,
};

// The method we'll use instead of a regular string
export function translate(name, params = {}) {
    return I18n.t(name, params);
}

export default I18n;