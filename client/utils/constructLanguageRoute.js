const constructLanguageRoute = (lang, { pathname }) => {
  if (pathname === "/") return `${pathname}${lang || ""}`

  if (pathname.split("/")[1].length === 2) pathname = pathname.slice(3)
  return lang ? `/${lang}${pathname}` : pathname
}

export default constructLanguageRoute