export default (state={}, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':{
      return{
        ...state,
        value: action.value
      }
    }
    case 'ID_COUNT':{
      return{
        ...state,
        id: action.id
      }
    }
    case 'LIST':{
      return{
        ...state,
        list: action.list
      }
    }
    case 'STATUS':{
      return{
        ...state,
        status: action.status
      }
    }
    case 'SEARCH_INPUT':{
      return{
        ...state,
        searchValue: action.searchValue
      }
    }

    default:
      return state
  }
}
