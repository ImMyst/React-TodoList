import {Todo} from './Interfaces'

export default class TodoStore {

  private static i = 0
  public todos: Todo[] = []

  static increment () {
    return this.i++
  }

  addTodo (title: string): void {
    this.todos = [{
      id: 0,
      title: title,
      completed: false
    }, ...this.todos]
  }

  removeTodo (todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo)
  }

  toggleTodo (todo: Todo, completed = true): void {
    this.todos = this.todos.map(t => t === todo ? { ...t, completed } : t)
  }

  editTodo (todo: Todo, title: string): void {
    this.todos = this.todos.map(t => t === todo ? { ...t, title } : t)
  }

  toggleAll (completed = true) {
    this.todos = this.todos.map(t => completed !== t.completed ? { ...t, completed } : t)
  }

  cleanTodo (): void {
    this.todos = this.todos.filter(t => !t.completed)
  }
}