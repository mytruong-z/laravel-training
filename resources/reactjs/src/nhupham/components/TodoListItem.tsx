import React from "react";
import "../assets/TodoListItem.css";
import {
    ListItem,
    Checkbox,
    IconButton,
    ListItemText,
    ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
    toggleDelete: ToggleDelete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleComplete, toggleDelete}) => {
    return (
        <ListItem divider={true}>
            <Checkbox
                onClick={() => toggleComplete(todo)}
                checked={todo.complete}
                disableRipple
            />
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={() => toggleDelete(todo)}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
