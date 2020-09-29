import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSquareFull } from '@fortawesome/free-solid-svg-icons';
import {deleteData, doneTask, fetchTask} from '../actions/todoAction';
import {connect} from 'react-redux';
import ShowLoading from "./showLoading";
import {Task} from '../models/task';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';

interface Props {
	listTask: [];
	fetchTask: () => void;
	doneData: (id: number, list: []) => void;
	deleteData: (id: number, list: []) => void;
}

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: '67vh',
	},
});

const TodoList: React.FC<Props> = (props: Props) => {
	const  {fetchTask} = props;
	const [list, setList] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		fetchTask();
	},[fetchTask]);

	useEffect(() => {
		setList(props.listTask.sort((a: Task, b: Task) => (a.id < b.id) ? 1 : -1));
		setLoaded(true);

	},[props.listTask, loaded]);

	const listHtml = list.length> 0 ? list.map((val: Task, i) => {

		return (
			<TableRow key={i} hover={true} className={val.completed ? 'completed' : ''}>
				<TableCell component="th" scope="row">
					<span onClick={() => props.doneData(val.id, props.listTask)}>
				{ val.completed ? <FontAwesomeIcon icon={faCheck} style={{color:"#6DB65B"}}/> : <FontAwesomeIcon icon={faSquareFull} style={{color:"#CCCCCC"}}/>  }
				</span>
				</TableCell>
				<TableCell onClick={() =>  props.doneData(val.id, props.listTask)}>{val.title}</TableCell>
				<TableCell>
					<span onClick={() => props.deleteData(val.id,  props.listTask)}>
					<FontAwesomeIcon icon={faTimes} style={{color:"#E91E63"}}/>
					</span>
				</TableCell>
			</TableRow>
			)
	}) : '';

	return <>
		{!loaded ?
		<ShowLoading/>
		:
		<>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell padding="default">Completed</TableCell>
								<TableCell padding="default">Text</TableCell>
								<TableCell padding="default">Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{listHtml}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</>
		}
	</>;
}

interface StateStore {
	todoBach: {
		listTask: []
	};
}
const mapStateToProps = (state: StateStore) => ({
		listTask: state.todoBach.listTask
})
const mapDispatchToProps = (dispatch: Function) => ({
	fetchTask: () => dispatch(fetchTask()),
	doneData: (id: number, list: []) => dispatch(doneTask(id, list)),
	deleteData: (id: number, list: []) => dispatch(deleteData(id, list))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
