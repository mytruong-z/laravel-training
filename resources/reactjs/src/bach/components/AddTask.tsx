import React, {SyntheticEvent, useState} from 'react';
import {addTask} from '../actions/todoAction';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
	formAdd: {
		width: '100%',
		marginBottom: 20,
	},
	input: {
		width: '90%'
	}
});

interface Props {
	addTask: (task: string, list: []) => void;
	list: [];
}
const AddTaskForm: React.FC<Props> = (props: Props) => {
	const [task, setTask] = useState('');
	const classes = useStyles();

	let handleChange = (e: SyntheticEvent) => {
		let target = e.target as HTMLInputElement;
		setTask(target.value);
	};
	let handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		if (task.length === 0) {
			alert('Not null');
			return false;
		}
		props.addTask(task , props.list);
		setTask('');
	};

	return <>
		<form onSubmit={handleSubmit} className={classes.formAdd} >
			<Input placeholder="Add task"
				   inputProps={{ 'aria-label': 'description' }}
				   value={task}
				   onChange={handleChange}
				   className={classes.input} />
			<Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
		</form>
	</>
}
interface State {
	todoBach: {
		listTask: []
	}
}
const mapStateToProps = (state: State) => ({
	list: state.todoBach.listTask
});
const mapDispatchToProps = (dispatch: Function) => ({
	addTask : (task: string, list: []) => dispatch(addTask(task, list))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
