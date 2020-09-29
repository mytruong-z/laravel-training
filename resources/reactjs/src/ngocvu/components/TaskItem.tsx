import React from "react";
import * as TaskActions from "../actions/TaskActions";
import { connect } from "react-redux";
import { Divider } from "@material-ui/core";
import { RadioButtonUnchecked, CheckCircle, DeleteOutline } from "@material-ui/icons";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export interface TaskItemState {
	checkedTask: (index: number) => void,
	removeTask: (index: number) => void,
	index: number,
	completed: boolean,
	text: string
};
const TaskItem: React.FC<TaskItemState> = (props) => {
	const classes = itemStyles();
	
	const {checkedTask, removeTask, index, completed, text} = props;

	let className = [""];
	if (completed) {
		className = [...className, "done"];
	}
	return (
		<li className={className.join(" ") + " " + classes.root}>
			<div className={classes.content + " " + "item"}>
				{completed ? <CheckCircle className={classes.checkIcon}/> : <RadioButtonUnchecked className={classes.checkIcon}/>}
				<span className={classes.label} onClick={() => checkedTask(index)}>{text}</span>
				<button type="button" className={classes.btnRemove} onClick={() => removeTask(index)}><DeleteOutline /></button>
			</div>
		</li>
	)
};

const mapStateToProps = (state: any) => {
	return {
		attr: state.Task
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		checkedTask: (id: number) => {
			dispatch(TaskActions.checkedTask(id))
		},
		removeTask: (id: number) => {
			dispatch(TaskActions.removeTask(id));
		}
	};
};

const itemStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		boxSizing: "border-box",
		border: "none",
		textTransform: "capitalize",
		fontSize: "1.1em",
		margin: 0,
		color: "#ced8e4",
		listStyle: "none",
		"&.done span": {
			textDecoration: "line-through",
			color: "rgb(206, 216, 228, 0.2)"
		},
		"&:hover": {
			background: "#3ec9e9",
			color: "black",
			borderColor: "#3ec9e9",
			label: {
				background: "#3ec9e9",
				color: "black",
				borderColor: "#3ec9e9",
			},
			btnRemove: {
				background: "#3ec9e9",
				color: "black",
				borderColor: "#3ec9e9"
			},
			"&.done span": {
				textDecoration: "line-through",
				color: "#ced8e4"
			}
		},
		"&:last-child": {
			"& .item": {
				borderBottom: "none"
			},
			"&:hover": {
				borderRadius: "0 0 20px 20px"
			}
		},
	},
	label: {
		flexGrow: 1,
		cursor: "pointer",
		minHeight: 50,
		display: "flex",
		alignItems: "center"
	},
	checkIcon: {
		marginRight: 15
	},
	content: {
		display: "flex",
		alignItems: "center",
		minHeight: 50,
		borderBottom: "1px solid #ced8e4",
		padding: "0 15px"
	},
	btnRemove: {
		border: "none",
		color: "#ced8e4",
		padding: 0,
		fontWeight: "bold",
		fontSize: 16,
		background: "transparent",
		cursor: "pointer",
		"&:hover": {
			color: "red"
		}
	}
}));

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);