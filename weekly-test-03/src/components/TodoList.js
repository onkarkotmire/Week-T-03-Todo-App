import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';
import '../App.css'

const TodoList = () => {
  const { todos, addTodo, editTodo, deleteTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    addTodo(newTodo);
    setNewTodo('');
  };

  const handleEditTodo = (id, title) => {
    setEditId(id);
    setEditValue(title);
  };

  const handleSaveEdit = () => {
    editTodo(editId, editValue);
    setEditId(null);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div className='main-div'>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className='user-input'
        />
        <button type="submit" className='user-input-button'>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <div className='edit-box'>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className='input-box'
                />
                <button onClick={handleSaveEdit} >Save</button>
              </div>
            ) : (
              <div className='item-box'>
                <div>{todo.title}</div>
                <div><button onClick={() => handleEditTodo(todo.id, todo.title)}>
                <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                <i class="fa-sharp fa-solid fa-trash"></i>
                </button>
                </div>
                
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

