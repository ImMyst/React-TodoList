import * as React from 'react'
import { Todo } from './Interfaces'
import * as cx from 'classnames'

interface Props {
  todo: Todo
  onToggle: (todo: Todo) => void
  onDestroy: (todo: Todo) => void
}

interface State {

}

export default class TodoItem extends React.Component<Props,State> {
  render () {
    let { todo } = this.props
    return <li className={cx({completed: todo.completed})}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={this.toggle} checked={todo.completed}/>
        <label>{todo.title}</label>
        <button className="destroy" onClick={this.destroy}></button>
      </div>
    </li>
  }

  toggle = () => {
    this.props.onToggle(this.props.todo)
  }
  destroy = () => {
    this.props.onDestroy(this.props.todo)
  }
}