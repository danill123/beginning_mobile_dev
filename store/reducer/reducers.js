const initialState = {
    token: false,
    userId: false,
    people: [],
    loading: true,
    errorMessage: false
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'indocov':
        return {...state, dataIndoCov: action.data , errorMessage: false};
    case 'detailindo':
        return {...state, detailCovidInd: action.data, errorMessage: false};
    case 'globalcov':
        return {...state, globalcovid: action.data, errorMessage: false};
    case 'error':
        return {...state, errorMessage: action.data };
  }
}

export default reducers;