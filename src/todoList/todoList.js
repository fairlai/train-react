import React from 'react';
import TodoItem from './todoItem/todoItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './todoList.css'
import {handleInput, handleAdd, handleRemove, handleToggle, handleSearchInput, handleStatus} from '../action/toDoListAction'

class TodoList extends React.Component {
  render() {
    const {value, list, status, searchValue, handleInput, handleAdd, handleRemove, handleToggle, handleSearchInput, handleStatus} = this.props;
    return (
      <div className={'todo-list'}>
        <input
          type="text"
          className={'todo-list-input'}
          onChange={handleInput.bind(this)}
          value={value.slice(0, 20)}
        />
        <button
          className={'button'}
          onClick={handleAdd}
        >
          新增
        </button>
        <div className={'button-group'}>
          <button onClick={handleStatus.bind(this,'all')}>全部</button>
          <button onClick={handleStatus.bind(this,'finished')}>已完成</button>
          <button onClick={handleStatus.bind(this,'unfinishde')}>未完成</button>
        </div>
        <input
          type="text"
          className={'todo-list-input'}
          onChange={handleSearchInput.bind(this)}
          value={searchValue.slice(0, 20)}
        />
        {
          list.filter(item=>{
            if(status === 'all'){
              return true
            }else if (status === 'finished') {
              return item.finish
            }else {
              return !item.finish
            }
          }).filter(
            item=> item.content.indexOf(searchValue)>-1
          ).map(item =>
            <TodoItem
              item={item}
              key={item.id}
              handleRemove={handleRemove.bind(this,item.id)}
              handleToggle={handleToggle.bind(this,item.id)}
            />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {value, list, status, searchValue} = state.toDoListReducer;
  return {value, list, status, searchValue}
};

const mapDispatchToProps = dispatch => bindActionCreators({
  handleInput, handleAdd, handleRemove, handleToggle, handleSearchInput, handleStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
