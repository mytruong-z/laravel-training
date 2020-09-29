import React, { FormEvent } from "react";
import * as TodoActions from "../store/TodoActions";
import { connect } from "react-redux";
import { TodoState, StoreState } from "../store/reducers/TodoReducers";
import {
	Button,
	FormControl,
	TextField,
	Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import root from "./styles";

export interface FormState {
	onChangeHandler: (value: string) => void,
	addTodo: () => void,
	attr: TodoState
}

const styles = makeStyles({
	buttonAdd: {
		width: 130,
		backgroundColor: root.secondColor,
		color: root.mainColor,
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: root.mainColor,
		"&:hover": {
			borderColor: root.mainColor,
			backgroundColor: root.secondColor,
		},
	},
	inputTitle: {
		color: root.mainColor,
		"& .MuiInputBase-input:focus": {
			color: root.mainColor,
		},
		"& .MuiInput-formControl:hover:before": {
			borderBottomColor: root.mainColor,
		},
		"& .MuiInput-underline:before": {
			borderBottomColor: root.mainColor,
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: root.mainColor,
		},
		"& label": {
			color: root.mainColor,
		},
		"& label.Mui-focused": {
			color: root.mainColor,
		},
	},
});

const Form: React.FC<FormState> = (props) => {
	const classes = styles();
	const { attr, onChangeHandler, addTodo } = props;

	const onSubmitHandler = (event: FormEvent) => {
		event.preventDefault();
		addTodo();
	};

	const onChange = (event: FormEvent) => {
		let target = event.target as HTMLInputElement;
		onChangeHandler(target.value);
	};

	return (
		<FormControl fullWidth onSubmit={onSubmitHandler}>
			<Grid container alignItems="flex-end" direction="row">
				<Grid item sm={1}></Grid>
				<Grid item sm={8}>
					<TextField fullWidth size="medium" className={classes.inputTitle} variant="standard" label="Title"
							   value={attr.inputValue || ""} onChange={onChange}/>
				</Grid>
				<Grid item sm={2}>
					<Button className={classes.buttonAdd} variant="contained">Add</Button>
				</Grid>
				<Grid item sm={1}></Grid>
			</Grid>
		</FormControl>
	);
};

const mapStateToProps = (state: StoreState) => {
	return {
		attr: state.TodoReducers,
	};
};

const mapDispatchToProps = (dispatch: Function) => {
	return {
		onChangeHandler: (value: string) => dispatch(TodoActions.setInputValue(value)),
		addTodo: () => dispatch(TodoActions.addTodo()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);