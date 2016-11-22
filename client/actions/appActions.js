import Promise from "promise-polyfill"
import request from 'superagent';

export const START_LOAD = 'START_LOAD';
export const PROGRESS_LOAD = 'PROGRESS_LOAD';
export const END_LOAD = 'END_LOAD';
// export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const REQUEST_LANGUAGE = 'REQUEST_LANGUAGE';
export const RECEIVE_LANGUAGE = 'RECEIVE_LANGUAGE';

export const TOGGLE_NAV = 'TOGGLE_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';

export const REQUEST_NATIONAL_SOCIETIES = 'REQUEST_NATIONAL_SOCIETIES';
export const RECEIVE_NATIONAL_SOCIETIES = 'RECEIVE_NATIONAL_SOCIETIES';

var counter;

function startLoad() {
  return {
    type: START_LOAD
  };
}

function endLoad() {
  return {
    type: END_LOAD
  };
}

function progressLoad(progress) {
  return {
    type: PROGRESS_LOAD,
    progress: progress
  };
}

export function startMainLoad() {
  return (dispatch, getState) => {
    var store = getState();
    var loaderState = store.appReducer.showLoader;

    dispatch(startLoad());
    dispatch(progressLoad(0));

    counter = setInterval(() => {
      // console.log('progress');
      var store = getState();
      var lastProgress = store.appReducer.loadProgress;
      dispatch(progressLoad(lastProgress + ((75 - lastProgress) / 4)));
    }, 300);
  };
}

export function endMainLoad() {
  console.log('Ending main load');
  return (dispatch, getState) => {
    // console.log('clearInterval');
    clearInterval(counter);
    counter = undefined;
    // console.log('progress 100');
    dispatch(progressLoad(100));
    setTimeout(() => {
      // console.log('end load');
      dispatch(endLoad());
      dispatch(progressLoad(0));
    }, 500);
  };
}

export function toggleNav() {
  return {
    type: TOGGLE_NAV
  };
}

export function closeNav() {
  return {
    type: CLOSE_NAV
  };
}

// export function switchLanguage(lang) {
//   return {
//     type: SWITCH_LANGUAGE,
//     lang: lang
//   };
// }

function requestLanguage() {
  return {
    type: REQUEST_LANGUAGE
  };
}

function receiveLanguage(lang, languageData) {
  return {
    type: RECEIVE_LANGUAGE,
    lang: lang,
    languageData: languageData
  };
}

export function fetchLanguage(lang) {
  return (dispatch, getState) => {

    dispatch(requestLanguage(lang));

    var promise = new Promise((resolve, reject) => {
        request(`/api/${lang}/application.json`)
          .end((err, res) => {
            if(err) {
              // dispatch(invalidateRequest());
              console.log('Failed at fetching language!');
              reject(err);
            }
            else {
              console.log('Received language');
              dispatch(receiveLanguage(lang, JSON.parse(res.text)));
              resolve(lang);
            }
          });
      });

    return promise;
  }
}





export function requestNationalSocieties() {
  return {
    type: REQUEST_NATIONAL_SOCIETIES
  };
}

export function receiveNationalSocieties(nationalSocieties) {
  return {
    type: RECEIVE_NATIONAL_SOCIETIES,
    nationalSocieties: nationalSocieties
  };
}

export function fetchNationalSocieties() {
  console.log('FETCHING NATIONAL SOCIEITES');
  return (dispatch, getState) => {
    dispatch(requestNationalSocieties());

    var promise = new Promise((resolve, reject) => {
        request('/api/data/national-societies.json')
          .end((err, res) => {
            if(err) {
              console.log('Failed at fetching national societies');
              reject(err);
            }
            else {
              console.log('Received National Societies');
              dispatch(receiveNationalSocieties(JSON.parse(res.text)));
              resolve();
            }
          })
      });

    return promise;
  }
}
