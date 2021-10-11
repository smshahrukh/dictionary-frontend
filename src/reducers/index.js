
export const CHANGE_PAGE = "CHANGE_PAGE"
export const SET_LAST_PAGE = "SET_LAST_PAGE"
export const SET_NAMES = "SET_NAMES"
export const ADD_NAME = "ADD_NAME"
export const SET_KEY = "SET_KEY" 

export const initialState = {
  page: 1,
  lastPage: 1,
  names: {
      1: []
  },
  key: "",
  pagesViewed: []
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEY: {
      return {
        ...state,
        key: action.key,
      }
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.page,
      }
    }
    case SET_LAST_PAGE: {
      return {
        ...state,
        lastPage: action.lastPage,
      }
    }
    case SET_NAMES: {
        const pagesViewed = state.pagesViewed.includes(action.page) ? state.pagesViewed : [...state.pagesViewed, action.page]
      return {
        ...state,
        pagesViewed,
        names: {
            ...state.names,
            [action.page]: action.names,
        }
      }
    }
  }
}
