const prefixLanguageToRoute = (lang, route = "") =>
  lang === "en" ?
            route :
            route === "/" ? `/${lang}` : `/${lang}${route}`

export default prefixLanguageToRoute
