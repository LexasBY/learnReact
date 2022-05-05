import React from 'react'
import {createRoot} from 'react-dom/client';
import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1},
    { label: 'Make Awesomme App', important: true, id: 2},
    { label: 'Have a lunch', important: false, id: 3},
  ]
  return (
  <div>
    <AppHeader/>
    <SearchPanel/>
    <TodoList todos= {todoData}/>
  </div>
  )
}
const el = <App/>
root.render(el)


