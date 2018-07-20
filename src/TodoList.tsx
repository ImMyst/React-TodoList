import * as React from 'react'

export default class TodoList extends React.Component {
  render () {
    return <section className="todoapp">
      <header className="header">
        <h1>Todo List</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list"><li data-id="1512138729248" className="completed"><div className="view"><input className="toggle" type="text"/></div></li></ul>
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