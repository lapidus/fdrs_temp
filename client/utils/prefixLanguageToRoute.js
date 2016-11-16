
export default function prefixLanguageToRoute(lang, route) {
  if(route === '/') {
    return lang === 'en' ? route : `/${lang}`;
  }
  else {
    return lang === 'en' ? route : `/${lang}${route}`;  
  }
};
