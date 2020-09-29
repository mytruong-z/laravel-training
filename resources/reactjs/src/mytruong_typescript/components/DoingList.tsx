import React from "react";
import * as actionTypes from "../store/action";
import { connect } from "react-redux";
import {Todo, DoingListType, ItemTodo, TodoReducer} from "../typings/Todo";
import { Box, List, ListItemIcon, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";
import {DeleteTwoTone, DoneAllOutlined} from '@material-ui/icons';

export interface typeForMap {
	allList: Todo;
	userId: number;
	TodoReducer: TodoReducer
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		flexDirection: 'column-reverse'
	},
	istGroupItem: {
		width: '100%',
		'&:hover': {
			background: '#ddd',
		},
	}
}));

const DoingList: React.FC<DoingListType> = (props) => {
	const { allList, userId, handleCompletedItem, handleRemoveItem } = props;
	const classes = useStyles();
	const findTodoByUser = () => { return allList.filter((todo: Todo) => (todo.userId) === userId) };

	const getListDoingOfUser = () => {
		const arrDoing:Todo[] = [];
		const dataOfUser: any = findTodoByUser();
		if(dataOfUser.length) {
			// eslint-disable-next-line array-callback-return
			dataOfUser.map((item: Todo) => {
				if(!item.completed) {
					arrDoing.push(item);
				}
			});
		}
		return arrDoing;
	};

	const doingList = getListDoingOfUser();

	return (
		<Box className="listDoing listCustom d-flex flex-column-reverse">
			<List className={classes.root}>
				{
					(doingList.length)
						?
						doingList.map((doing: Todo, index: number) => {
							return (
								<ListItem className={classes.istGroupItem} key={doing.id}>
									<ListItemIcon>
										<IconButton edge="end" onClick={() => handleCompletedItem(doing)}>
											<DoneAllOutlined />
										</IconButton>
									</ListItemIcon>
									<ListItemText primary={doing.title} />
									<ListItemSecondaryAction>
										<IconButton edge="end" onClick={() => handleRemoveItem(doing.id)}>
											<DeleteTwoTone />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							);
						})
						: null
				}
			</List>
		</Box>

	);
};

const mapStateToProps = (state: typeForMap) => {
	return {
		allList: state.TodoReducer.allList,
		userId: state.TodoReducer.userId
	};
};

//action
const mapDispatchToProps = (dispatch: Function) => ({
	handleCompletedItem: (data: ItemTodo) => dispatch(actionTypes.handleCompletedItem(data)),
	handleRemoveItem: (id: number) => dispatch(actionTypes.handleRemoveItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DoingList);