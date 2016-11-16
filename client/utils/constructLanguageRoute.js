
export default function constructLanguageRoute(lang, location) {
  if(location.pathname === '/') {
    return lang ? (location.pathname + lang) : location.pathname;
  }
  var urlArray = location.pathname.split('/');
  if(urlArray[1].length === 2) {
    return lang ? ('/' + lang + location.pathname.slice(3)) : location.pathname.slice(3);
  }
  return lang ? ('/' + lang + location.pathname) : location.pathname;
};
