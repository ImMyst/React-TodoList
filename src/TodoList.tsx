import * as React from 'react'
import TodoStore from './TodoStore'
import {Todo} from './Interfaces';
import TodoItem from './TodoItem';

interface TodoListProps {

}

interface TodoListState {
  todos: Todo[]
}

export default class TodoList extends React.Component<TodoListProps,TodoListState> {
  private store: TodoStore = new TodoStore()

  constructor (props: TodoListProps) {
    super(props)
    this.store.addTodo('Salut')
    this.store.addTodo('les potes')
    this.state = {
      todos: this.store.todos
    }
  }

  render () {
    let {todos} = this.state

    return <section className="todoapp">
      <header className="header">
        <h1>Todo List</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map(todo => {
            return <TodoItem todo={todo} key={todo.id}/>
          })}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count"><strong>1</strong> item left</span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active" className="">Active</a>
          </li>
          <li>
            <a href="#/completed" className="">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  }
}