import d3 from 'd3';
import { isNumber } from 'lodash';

let niceNum = () => {
  return (input, precision, format) => {
    var numPrefix, humanPrefixes, numValue, roundedValue, finalString;

    if (!isNumber(input)) { return 'n/a'; }

    // Set the best precision
    if (isNumber(input) && !isNumber(precision)) {
      if (input < 0.001) {
        precision = 4;
      } else if (input < 0.01) {
        precision = 3;
      } else if (input < 0.1) {
        precision = 2;
      } else if (input < 10) {
        precision = 1;
      } else {
        precision = 0;
      }
    }

    if (input === 'N/A') {
        finalString = input;
    } else if (Math.abs(input) < 1000000) {
        if((Math.abs(input) > 1000)){
          finalString = Math.ceil(input/100)*100;
        } else {
          finalString = d3.round(input, precision);
        }
    } else {
        numPrefix     = d3.formatPrefix(input);
        humanPrefixes = format === 'long' ?
                                {k: ' thousand', M: ' million', G: ' billion', T: ' trillion'} :
                                {k: 'k', M: 'm', G: 'bn', T: 'tr'};
        numValue      = numPrefix.scale(input);
        roundedValue  = d3.round(numValue, precision);

        finalString = roundedValue + humanPrefixes[numPrefix.symbol];
    }

    return finalString;
  };
};
export default niceNum;
