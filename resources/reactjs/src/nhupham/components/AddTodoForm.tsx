import React, { useState, ChangeEvent } from "react";
import { FormControl, TextField, Paper, Button, Grid } from '@material-ui/core';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    };

    return (
        <FormControl fullWidth={true}>
            <Paper style={{margin: 16, padding: 16}}>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid xs={10} md={11} item style={{paddingRight: 16}}>
                            <TextField
                                placeholder="Enter event here"
                                value={newTodo}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={2} md={1} item>
                            <Button
                                type="submit"
                                fullWidth
                                color="secondary"
                                variant="outlined"
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormControl>
    );
};
