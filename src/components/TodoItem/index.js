// Write your code here
import './index.css'

const TodoItem = props => {
  const {Todo, onDeleteTodo, key} = props
  console.log(key)
  const {title, id} = Todo
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todo-item">
      <div>
        <p className="title">{title}</p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
