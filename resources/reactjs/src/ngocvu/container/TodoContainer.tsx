import React, { useEffect } from "react";
import TaskList from "../components/TaskList";
import Form from "../components/FormAddTask";
import * as TaskActions from "../actions/TaskActions";
import { connect } from "react-redux";
import { TaskState } from "../reducers/TaskReducers";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const url = "http://jsonplaceholder.typicode.com/todos";
export interface AppState {
	fetchData: () => void;
	attr: TaskState
};
const TodoContainer: React.FC<AppState> = (props) => {
	const classes = itemStyles();
	const { fetchData } = props;
	useEffect(() => {
		// require('../assets/TodoList.css');
		fetchData();
	}, [fetchData]);

	return (
		<div className={classes.todolist}>
			<div className={classes.container}>
				<h2 className={classes.title}>List Tasks</h2>
				<Form />
				<div className={classes.tableStriped}>
					<div className={classes.tableHeader}>
						Name of task
					</div>
					<div className="table-body">
						<TaskList />
					</div>
				</div>
			</div>
		</div>
	);
};

const itemStyles = makeStyles((theme: Theme) => ({
	todolist: {
		textAlign: "left",
		padding: "50px 15px 25px 15px",
		margin: 0,
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'Roboto', sans-serif",
		background: "linear-gradient(to right, #2940a4, #3ec9e9)",
		[theme.breakpoints.up("sm")]: {
			padding: "25px 50px"
		}
	},
	container: {
		color: "#ced8e4",
		background: "#1e1f2e",
		borderRadius: 20,
		boxShadow: "5px 5px 5px rgb(43, 45, 66, 0.5)",
		padding: 0
	},
	tableStriped: {
		color: "#fff"
	},
	tableHeader: {
		color: "#3ec9e9",
		textTransform: "capitalize",
		borderBottom: "2px solid #fff",
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 0,
		padding: 15
	},
	title: {
		padding: "20px 0 10px 20px",
		fontWeight: 600,
		color: "#3ec9e9",
		textAlign: "center",
		textTransform: "uppercase"
	}
}));

const mapStateToProps = (state: any) => {
	return { 
		attr : state.Tasks
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchData: () => {
			dispatch(TaskActions.fetchData(url));
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
