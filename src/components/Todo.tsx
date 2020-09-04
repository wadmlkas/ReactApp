import React from 'react';

export type TodoProps = {
    onClick: (event) => void,
    completed: boolean,
    text: string
};

const Todo = ({ onClick, completed, text }: TodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed? 'line-through': 'none'
        }}
    >
        {text}
    </li>
);

export default Todo;