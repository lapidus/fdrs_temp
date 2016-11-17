import { formatPrefix } from "d3"

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)

/**
 * Nicely formatted numbers
 * @param  {Number} input
 * @param  {Number} precision
 * @return {String}
 */
const niceNum = (input, precision, format) => {
  if (!isNumeric(input)) return "…"
  if (input === "N/A") return input

  // Set the best precision
  if (isNumeric(input) && !isNumeric(precision)) {
    if (input < 0.001)
      precision = 4
    else if (input < 0.01)
      precision = 3
    else if (input < 0.1)
      precision = 2
    else if (input < 10)
      precision = 1
    else
      precision = 0
  }

  if (Math.abs(input) < 10000) return input.toFixed(precision)

  const prefixes = format === "long" ?
    { k: " thousand", M: " million", G: " billion", T: " trillion" } :
    { k: "k", M: "m", G: "bn", T: "tr" }
  const formatted = formatPrefix("k", input)(input)
  const scaled = +formatted.slice(0, -1)
  const symbol = formatted.slice(-1)
  return `${scaled.toFixed(precision)}${prefixes[symbol]}`
}

export default niceNum
