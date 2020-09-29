import React from "react";
import Row from "./Row";
import { ListUtils } from "./Todo";
import { connect } from "react-redux";
import { TodoState, Todo, StoreState } from "../store/reducers/TodoReducers";
import {
	Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import root from "./styles";

export interface ListState {
	todoList: (list: Todo[], userId: number) => Todo[],
	attr: TodoState
}

const styles = makeStyles({
	listBox: {
		width: "100%",
	},
	listTodo: {
		margin: 0,
		padding: 0,
		width: "100%",
	},
});

const List: React.FC<ListState> = (props) => {
	const classes = styles();
	const { attr, todoList } = props;

	const list = () => {
		return todoList(attr.list, attr.currentUser);
	};

	return (
		<Grid container justify="center" sm={12} className={classes.listBox}>
			{
				(attr.isLoaded)
					? (
						(list().length > 0)
							?
							<ul className={classes.listTodo}>
								{
									list().map(todo => {
										return <Row key={todo.id} index={todo.id}
													text={todo.title}
													completed={todo.completed}/>;
									})
								}
							</ul>
							: (
								(attr.error === "")
									? "Not found todo list"
									: <p>{attr.error}</p>
							)
					)
					: <p>Loading...</p>
			}
		</Grid>
	);
};

const mapStateToProps = (state: StoreState) => {
	return {
		attr: state.TodoReducers,
	};
};

const mapDispatchToProps = (dispatch: Function) => {
	return {
		todoList: (list: Todo[], userId: number) => ListUtils.getTodoListByUserId(list, userId),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);