import Promise from "promise-polyfill"
import request from 'superagent';

export const REQUEST_CHAPTER = 'REQUEST_CHAPTER';
export const RECEIVE_CHAPTER = 'RECEIVE_CHAPTER';
export const INVALIDATE_REQUEST = 'INVALIDATE_REQUEST';

function invalidateRequest() {
  return {
    type: INVALIDATE_REQUEST
  };
}

function requestChapter() {
  return {
    type: REQUEST_CHAPTER
  };
}

function receiveChapter(chapter, language) {
  return {
    type: RECEIVE_CHAPTER,
    chapter: chapter,
    language: language
  };
}

export function fetchChapter(params, pathname) {

  var pathnameArray = pathname.split('/');
  var cleanedPathname = pathnameArray[pathnameArray.length - 1]

  return (dispatch, getState) => {
    var appState = getState();

    if(shouldFetchChapter(appState, cleanedPathname)) {
      dispatch(requestChapter());

      var promise = new Promise((resolve, reject) => {
        var currentLanguage = appState.appReducer.language;
        request(`/api/${currentLanguage}/${cleanedPathname}.json`)
          .end((err, res) => {
            if(err) {
              dispatch(invalidateRequest());
              reject(err);
            }
            else {
              dispatch(receiveChapter(res.body, currentLanguage));
              resolve(res);
            }
          });
      });

      return promise;
    }
  };
}

function shouldFetchChapter(state, cleanedPathname) {
  var currentLanguage = state.appReducer.language;
  var chapterKeys = Object.keys(state.chapterReducer[currentLanguage].chapters);
  var chaptersLength = Object.keys(chapterKeys).length;
  return state.chapterReducer.isFetching ? false : chaptersLength === 0 ? true : chapterKeys.indexOf(cleanedPathname) === -1;
}
