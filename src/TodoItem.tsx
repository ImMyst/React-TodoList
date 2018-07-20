import * as React from 'react'
import { Todo } from './Interfaces'
import * as cx from 'classnames'
import {ChangeEvent} from 'react';

interface Props {
  todo: Todo
  onToggle: (todo: Todo) => void
}

interface State {

}

export default class TodoItem extends React.Component<Props,State> {
  render () {
    let { todo } = this.props
    return <li className={cx({completed: todo.completed})}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={this.toggle}/>
        <label>{todo.title}</label>
        <button className="destroy"></button>
      </div>
    </li>
  }

  toggle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    this.props.onToggle(this.props.todo)
  }
}