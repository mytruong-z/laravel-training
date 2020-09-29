import React, {SyntheticEvent, useState} from 'react';
import { addTodo } from "../store/TodoKhoaAction";
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	formAdd: {
		width: '100%',
		marginBottom: 20,
	},
	input: {
		width: '90%'
	}
});

export interface FormState {
	addTodo: (taskName: string) => void;
}

const AddTodoForm: React.FC<FormState> = (props) => {
	const { addTodo } = props;
	const classes = useStyles();
	const [inputValue, setInputValue] = useState('');

	const handleInput = (e: SyntheticEvent) => {
		const target = e.target as HTMLInputElement;
		setInputValue(target.value);
	};
	const addTask = (e: SyntheticEvent) => {
		let taskName = inputValue;

		if (taskName === '') {
			alert('Task can not be plank!');
		} else {
			addTodo(taskName);
		}
		setInputValue('');
		e.preventDefault();
	};

	return <>
		<form onSubmit={addTask} className={classes.formAdd} >
			<TextField
				id="standard-multiline-flexible"
				label="Add task"
				value={inputValue}
				onChange={handleInput}
				className={classes.input}
			/>
			<Button onClick={addTask} variant="contained" color="primary">Add</Button>
		</form>
	</>
};

const mapDispatchToProps = (dispatch: Function) => ({
	addTodo : (taskName: string) => dispatch(addTodo(taskName))
});

export default connect(null, mapDispatchToProps)(AddTodoForm);