
//输入
export const handleInput = (e) =>  (dispatch) => {
  dispatch({
    type:'INPUT_VALUE',
    value:e.target.value
  });
};

//添加
export const  handleAdd =  () => (dispatch, getState) =>  {
  const {value, list} = getState().toDoListReducer;
  if (value === '') {
    return
  }
  let {id} = getState().toDoListReducer;
  const newList = [...list, {content: value, finish: false, id: ++id}];
  dispatch({
    type:'ID_COUNT',
    id: ++id
  });
  dispatch({
    type:'LIST',
    list:newList
  })
};

//移除
export const  handleRemove =  (id) => (dispatch, getState) =>  {
  const {list} = getState().toDoListReducer;
  const newList = list.filter(item => item.id !== id);
  dispatch({
    type:'LIST',
    list:newList
  })
};

//标记
export const  handleToggle =  (id) => (dispatch, getState) =>  {
  const {list} = getState().toDoListReducer;
  const newList = list.map(item => {
    if (item.id === id) {
      return {
        ...item, finish: !item.finish
      }
    }
    return item;
  });
  dispatch({
    type:'LIST',
    list:newList
  })
};

//筛选
export const  handleStatus =  (status) => (dispatch) =>  {
  dispatch({
    type:'STATUS',
    status
  })
};

//搜索
export const  handleSearchInput =  (e) => (dispatch) =>  {
  dispatch({
    type:'SEARCH_INPUT',
    searchValue:e.target.value
  })
};
