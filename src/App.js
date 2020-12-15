import React, { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css'
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { text }
    ]
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <Container
      border="light"
      className="wrapper m-3 p-2"
    >
      <Row className="justify-content-md-center">
        <Col>
          <h1>To-Do list</h1>
          <div className="todo-list">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
            <TodoForm addTodo={addTodo} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App;