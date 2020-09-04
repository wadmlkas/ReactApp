import React from 'react';
import Todo from './Todo';

type TodoProps = {
    id: number,
    completed: boolean,
    text: string
};

type TodoListProps = {
    todos: TodoProps[],
    toggleTodo: Function
}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            ))}
        </ul>
    )
}

export default TodoList;