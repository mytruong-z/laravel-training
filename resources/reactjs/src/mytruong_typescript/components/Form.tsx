import React, {FormEvent, SyntheticEvent} from 'react';
import * as actionTypes from "../store/action";
import { connect } from "react-redux";
import { FormState, ItemTodo, TodoReducer } from "../typings/Todo";
import { Button, TextField } from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";

interface typeForMapForm {
	TodoReducer: TodoReducer
}

const useStyles = makeStyles({
	TextField: {
		width: "70%",
		color: "#ffffff",
	},
	buttonSave: {
		width: "30%"
	},
	FormAdd: {
		display: "flex"
	}
});

const Form: React.FC<FormState> = (props) => {
	const {userId, newValue, totalItem, setNewValue, handleAddItem} = props;
	const classes = useStyles();

	const handleChange = (e: SyntheticEvent ) => {
		const target = e.target as HTMLInputElement;
		setNewValue(target.value);
	};

	const submitForm = ( e: FormEvent) => {
		e.preventDefault();
		if (newValue) {
			const newTodo = {
				id: totalItem + 1,
				title: newValue,
				completed: false,
				userId,
			};
			setNewValue("");
			handleAddItem(newTodo);
		} else {
			alert("Do not leave blank !");
		}
	};

	return (
		<form name="form" className={classes.FormAdd} onSubmit={submitForm}>
			<TextField
				variant="outlined"
				className={classes.TextField}
				value={newValue}
				onChange={handleChange}
			/>
			<Button
				variant="contained"
				onClick={submitForm}
				className={classes.buttonSave}>Save</Button>
		</form>
	)
}

const mapStateToProps = (state: typeForMapForm) => {
	return {
		newValue: state.TodoReducer.newValue,
		userId: state.TodoReducer.userId,
		totalItem: state.TodoReducer.totalItem,
	};
};

//action
const mapDispatchToProps = (dispatch: Function) => ({
	setNewValue: (data: string) => dispatch(actionTypes.setNewValue(data)),
	handleAddItem: (data: ItemTodo) => dispatch(actionTypes.handleAddItem(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);