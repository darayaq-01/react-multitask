import React from 'react';

import { Button } from 'react-bootstrap';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{
                textDecoration: todo.isCompleted ? 'line-through' : '',
            }}
        >
            {todo.text}
            <div>
                <Button
                    variant="outline-success"
                    className="m-2"
                    onClick={() => completeTodo(index)}
                >
                    complete
                </Button>
                <Button
                    variant="outline-danger"
                    className="m-2"
                    onClick={() => removeTodo(index)}
                >
                    x
                </Button>
            </div>
        </div>
    );
};
export default Todo;
