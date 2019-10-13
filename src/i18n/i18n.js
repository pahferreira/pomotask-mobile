import I18n from 'react-native-i18n';
import en from './languages/en-US';
import ptBR from './languages/pt-BR';

I18n.fallbacks = true;

I18n.defaultLocale = 'en';

I18n.translations = {
  en,
  'pt-BR': ptBR,
};

export default I18n;
