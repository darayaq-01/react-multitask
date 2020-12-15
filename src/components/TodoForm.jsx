import React, { useState } from 'react';

import { Container, Row } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <Container>
            <Row>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        value={value}
                        placeholder="your task"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </form>
            </Row>
        </Container>
    );
};

export default TodoForm;
