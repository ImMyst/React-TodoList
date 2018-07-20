import * as React from 'react'
import { Todo } from './Interfaces'
import * as cx from 'classnames'

interface Props {
  todo: Todo
}

interface State {

}

export default class TodoItem extends React.Component<Props,State> {
  render () {
    let { todo } = this.props
    return <li className={cx({completed: todo.completed})}>
      <div className="view">
        <input className="toggle" type="checkbox"/>
        <label>{todo.title}</label>
        <button className="destroy"></button>
      </div>
    </li>
  }
}