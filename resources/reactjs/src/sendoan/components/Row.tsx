import React from "react";
import * as TodoActions from "../store/TodoActions";
import { connect } from "react-redux";
import { StoreState } from "../store/reducers/TodoReducers";
import {
	ListItem, ListItemIcon, ListItemText
} from "@material-ui/core";
import {
	Delete, Check
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import root from "./styles";

export interface RowState {
	checkedTodo: (index: number) => void,
	removeTodo: (index: number) => void,
	index: number,
	completed: boolean,
	text: string
}

const styles = makeStyles({
	listItem: {
		position: "relative",
		backgroundColor: "#F5F5F5",
		"&.done .MuiListItemIcon-root:nth-child(1)": {
			color: root.secondColor,
		},
		"&.done .MuiListItemText-root": {
			textDecorationLine: "line-through"
		},
		"&.even": {
			backgroundColor: "#ffe2e2"
		},
		"&.done": {
			backgroundColor: root.thirdColor
		},
		"&:hover": {
			backgroundColor: root.mainColor
		},
		"&:hover .MuiListItemIcon-root:nth-child(1)": {
			color: root.mainColor
		},
		"&.even.done .MuiListItemIcon-root:nth-child(1)": {
			color: root.secondColor
		},
		"&.even.done:hover .MuiListItemIcon-root:nth-child(1)": {
			color: root.secondColor
		},
		"&.done:hover .MuiListItemIcon-root:nth-child(1)": {
			color: root.secondColor
		},
		"&.even .MuiListItemIcon-root:nth-child(1)": {
			color: "#ffe2e2"
		},
		"&.even:hover .MuiListItemIcon-root:nth-child(1)": {
			color: root.mainColor
		},
	},
	listItemText: {
		textAlign: "left",
		color: root.secondColor,
		"&:hover": {
			cursor: "pointer"
		},
	},
	listItemIconCheck: {
		color: "#F5F5F5",
		paddingLeft: 10,
		margin: 0,
		"&:hover": {
			cursor: "pointer"
		},
	},
	listItemIconDelete: {
		color: root.secondColor,
		"&:hover": {
			color: "#ffffff",
			backgroundColor: "#ff5353",
			cursor: "pointer"
		},
		"&.MuiListItemIcon-root": {
			minWidth: 50,
			height: "100%",
			position: "absolute",
			right: 0,
			paddingTop: 12,
			paddingLeft: 12
		}
	}
});

const Row: React.FC<RowState> = (props) => {
	const classes = styles();
	const { checkedTodo, removeTodo, index, completed, text } = props;

	let className = [""];
	className = (index % 2) === 0 ? [...className, "odd"] : [...className, "even"];
	if (completed) {
		className = [...className, "done"];
	}

	return (
		<ListItem className={className.join(" ") + " " + classes.listItem}>
            <ListItemIcon className={classes.listItemIconCheck} onClick={() => checkedTodo(index)}>
                <Check/>
            </ListItemIcon>
			<ListItemText className={classes.listItemText} onClick={() => checkedTodo(index)}>{text}</ListItemText>
			<ListItemIcon className={classes.listItemIconDelete} onClick={() => removeTodo(index)}>
				<Delete/>
			</ListItemIcon>
		</ListItem>
	);
};

const mapStateToProps = (state: StoreState) => {
	return {
		attr: state.TodoReducers,
	};
};

const mapDispatchToProps = (dispatch: Function) => {
	return {
		checkedTodo: (id: number) => dispatch(TodoActions.checkedTodo(id)),
		removeTodo: (id: number) => dispatch(TodoActions.removeTodo(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);