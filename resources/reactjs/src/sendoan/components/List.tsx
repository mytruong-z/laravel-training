import React from "react";
import Row from "./Row";
import { connect } from "react-redux";
import { TodoState, StoreState } from "../store/reducers/TodoReducers";
import {
	Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export interface ListState {
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
	const { attr } = props;

	return (
		<Grid container justify="center" className={classes.listBox}>
			{
				(attr.isLoaded)
					? (
						(typeof attr.list != 'undefined')
							?
							<ul className={classes.listTodo}>
								{
									attr.list.map(todo => {
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

export default connect(mapStateToProps)(List);