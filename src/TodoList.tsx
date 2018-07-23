import * as React from 'react'
import TodoStore from './TodoStore'
import {Todo} from './Interfaces';
import TodoItem from './TodoItem';
import {FormEvent, KeyboardEvent} from 'react';
import {log} from 'util';

interface TodoListProps {

}

interface TodoListState {
  todos: Todo[],
  newTodo: string
}

export default class TodoList extends React.Component<TodoListProps,TodoListState> {
  private store: TodoStore = new TodoStore()
  private toggleTodo: (todo: Todo) => void
  private destroyTodo: (todo: Todo) => void

  constructor (props: TodoListProps) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.store.onChange((store )=> {
      this.setState({todos: store.todos})
    })
    this.toggleTodo = this.store.toggleTodo.bind(this.store)
    this.destroyTodo = this.store.removeTodo.bind(this.store)
  }

  componentDidMount () {
    this.store.addTodo('Salut')
    this.store.addTodo('les potes')
  }

  render () {
    let {todos, newTodo} = this.state

    return <section className="todoapp">
      <header className="header">
        <h1>Todo List</h1>
        <input className="new-todo" placeholder="What needs to be done?" onInput={this.updateNewTodo} onKeyPress={this.addTodo} value={newTodo}/>
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map(todo => {
            return <TodoItem todo={todo} key={todo.id} onToggle={this.toggleTodo} onDestroy={this.destroyTodo}/>
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

  updateNewTodo = (e: FormEvent<HTMLInputElement>) => {
    this.setState({newTodo: (e.target as HTMLInputElement).value})
  }
  addTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.store.addTodo(this.state.newTodo)
      this.setState({newTodo: ''})
    }
  }
}