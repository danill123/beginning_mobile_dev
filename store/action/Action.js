
export const fetchCovindo = () => {
    //IN order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
      try {
        //Have it first fetch data from our starwars url.
        let starWarsPromise = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia');
        let people = await starWarsPromise.json();
        //Now when the data is retrieved dispatch an action altering redux state.
        dispatch({type: 'indocov', data: people})
      } catch(error) {
        dispatch({type: 'error', data: true})
      }
    }
}

export const detailIndo = () => {
  return async dispatch => {
    try {
      let api = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/more');
      let data = await api.json();
      dispatch({type: 'detailindo', data: data})
    } catch (error) {
      dispatch({type: 'error', data: true})
    }
  }
}