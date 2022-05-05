import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'

const App = () => {
  return (
  <div>
    <AppHeader/>
    <SearchPanel/>
    <TodoList/>
  </div>
  )
}
const el = <App/>

ReactDOM.render(el, document.querySelector('#root'))


