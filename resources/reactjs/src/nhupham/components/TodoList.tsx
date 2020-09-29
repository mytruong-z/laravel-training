import React from "react";
import {TodoListItem} from "./TodoListItem";
import { List, Paper } from '@material-ui/core';

interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    toggleDelete: ToggleDelete;
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleComplete, toggleDelete }) => {
    return (
        <Paper style={{ margin: 16 }}>
            <List style={{ overflow: 'scroll' }}>
                {todos.map((todo, index) => (
                    <TodoListItem
                        key={index}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        toggleDelete={toggleDelete}
                    />
                ))}
            </List>
        </Paper>
    );
};
