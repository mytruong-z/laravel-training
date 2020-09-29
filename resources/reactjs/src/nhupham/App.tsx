import React, {useState} from "react";
import {TodoList} from "./components/TodoList";
import {AddTodoForm} from "./components/AddTodoForm";
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

const AppNhuPham: React.FC = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const toggleComplete: ToggleComplete = selectedTodo => {
        const updatedTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {...todo, complete: !todo.complete};
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const addTodo: AddTodo = newTodo => {
        if (newTodo.trim() === '') {
            alert('Please enter value');
        } else {
            setTodos([...todos, {text: newTodo, complete: false}]);
        }
    };

    const toggleDelete: ToggleDelete = deleteTodo => {
        const confirmDelete = window.confirm('Are you sure?');
        if (confirmDelete) {
            let key;
            todos.map((todo, index) => {
                if (todo === deleteTodo) {
                    key = index;
                }
            });
            const removeEvent = [ ...todos ];
            // @ts-ignore
            removeEvent.splice(key, 1);
            setTodos(removeEvent);
        }
    };

    return (
        <React.Fragment>
            <Paper
                elevation={0}
                style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
            >
                <AppBar color="primary" position="static" style={{ height: 64 }}>
                    <Toolbar style={{ height: 64 }}>
                        <Typography color="inherit">TODO APP</Typography>
                    </Toolbar>
                </AppBar>
            </Paper>
            <AddTodoForm addTodo={addTodo}/>
            <TodoList todos={todos} toggleComplete={toggleComplete} toggleDelete={toggleDelete}/>
        </React.Fragment>
    );
};

export default AppNhuPham;
