import React from 'react';
import {Grid, Theme, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import TodoList from '../components/TodoList';
import AddTaskForm from '../components/AddTask';


const Bach: React.FC = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={8}>
				<Typography variant="h4" gutterBottom>
					Todo List
				</Typography>
				<AddTaskForm/>
				<TodoList />
			</Grid>
		</Grid>
	)
}
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: 20,
		marginLeft: 300,
		[theme.breakpoints.down("md")]: {
			paddingTop: 50,
			paddingLeft: 15,
			paddingRight: 15,
		},
	},

	buttonContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	button: {
		marginBottom: 15,
	},
}));
export default Bach
