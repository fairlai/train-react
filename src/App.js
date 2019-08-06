import React from 'react';
// import TextInput from './textInput/textInput';
import TodoList from './todoList/todoList';
import { Provider } from 'react-redux';
import store from './store/toDoList';
import './App.css';

class App extends React.Component{

  render() {
    return(
      <Provider store={store}>
        <div className={'app'}>
          <TodoList/>
        </div>
      </Provider>

    )
  }
}
export default App;
