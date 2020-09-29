import React from "react";
import TaskItem from './TaskItem';
import { Actions } from "./ListTasks";
import { connect } from "react-redux";
import { TaskState, Todo } from '../reducers/TaskReducers';
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export interface ListState {
	todoList(list: Todo[], usesrId: number): Todo[],
	attr: TaskState
};
const TaskList = (props: ListState): JSX.Element => {
	const classes = itemStyles();
	const { attr, todoList } = props;
	const list = () => {
		return todoList(attr.list, attr.currentUser);
	};

	return (
		<div>
			{
				(attr.isLoaded)
					? (
						(list().length > 0)
							?
						<ul className={classes.listTodo}>
							{
								list().map(todo => {
									return <TaskItem key={todo.id} index={todo.id}
												text={todo.title}
												completed={todo.completed} />;
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
		</div>
	);
};

const itemStyles = makeStyles((theme: Theme) => ({
	listTodo: {
		paddingLeft: 0,
		marginTop: 0
	}
}));

const mapStateToProps = (state: any) => {
	return {
		attr: state.Task
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		todoList: (list: Todo[], userId: number) => {
			return Actions.getTodosByUserId(list, userId);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);