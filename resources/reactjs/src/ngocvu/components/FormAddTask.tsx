import React from 'react';
import * as TaskActions from '../actions/TaskActions';
import { connect } from "react-redux";
import { TaskState } from '../reducers/TaskReducers';
import { Button } from '@material-ui/core';
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export interface FromState {
	onChangeHandler: (event: React.SyntheticEvent) => void,
	addTask: (event: React.SyntheticEvent) => void,
	attr: TaskState
};

const Form: React.FC<FromState> = ( props: FromState ) => {
	const classes = itemStyles();
  	const { attr, onChangeHandler, addTask } = props;
	return (
		<form className={classes.groupAddTask} onSubmit={addTask}>
			<input 
				type="text" 
				name="inputTask"
				required
				className={classes.formControl} 
				placeholder="Enter your task ..." 
				value={attr.inputValue || ""}
				onChange={onChangeHandler} />
			<Button variant="contained" color="primary" className={classes.btnSubmit} type="submit">Add</Button>
		</form>
	);
};

const itemStyles = makeStyles((theme: Theme) => ({
	groupAddTask: {
		width: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "0 auto 20px",
		[theme.breakpoints.up("sm")]: {
			width: "60%"
		}
	},
	formControl: {
		display: "block",
		width: "100%",
		padding: "0.875rem 1.375rem",
		fontSize: "1rem",
		lineHeight: 1,
		color: "#495057",
		backgroundColor: "#ffffff",
		backgroundClip: "padding-box",
		border: "1px solid #ced4da",
		borderRadius: "2px",
		transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
		[theme.breakpoints.up("sm")]: {
			height: 40
		}
	},
	btnSubmit: {
		display: "flex",
		alignItems: "center",
		height: 50,
		marginLeft: "5px",
		backgroundColor: "transparent",
		color: "#3ec9e9",
		border: "1px solid #3ec9e9",
		"&:hover": {
			backgroundColor: "#3ec9e9",
			color: "#fff",
			borderColor: "transparent"
		},
		[theme.breakpoints.up("sm")]: {
			height: 40
		},
	}
}));

const mapStateToProps = (state: any) => {
	return {
		attr: state.Task
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onChangeHandler: (event: React.SyntheticEvent) => {
			let target = event.target as HTMLInputElement;
			dispatch(TaskActions.setInputValue(target.value));
		},
		addTask: (event: React.SyntheticEvent) => {
			event.preventDefault();
			dispatch(TaskActions.addTask());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);