import i18n from "i18next"
import XHR from "i18next-xhr-backend"

i18n
  .use(XHR)
  .init({
    fallbackLng: "en",
    ns: ["report-common"],
    defaultNS: "report-common",
    debug: true,
    returnObjects: true,
  })

export default i18n
