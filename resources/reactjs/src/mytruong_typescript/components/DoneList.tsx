import React from "react";
import * as actionTypes from "../store/action";
import { connect } from "react-redux";
import {Todo, DoneListProps, TodoReducer} from "../typings/Todo";
import { Box, List, ListItemIcon, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";
import { DeleteTwoTone, FavoriteBorderOutlined } from "@material-ui/icons";

export interface typeForMap {
	allList: Todo;
	userId: number;
	TodoReducer: TodoReducer
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	istGroupItem: {
		width: '100%',
		'&:hover': {
			background: "#7d7979",
		},
		background: "#ddd"
	},
	DoneItem: {
		textDecoration: "line-through"
	}
}));

const DoneList: React.FC<DoneListProps> = (props) => {
	const {allList, userId, handleRemoveItem} = props;
	const classes = useStyles();
	const findTodoByUser = () => { return allList.filter((todo: Todo) => todo.userId === userId) };

	const getListDoneOfUser = () => {
		const dataOfUser:any = findTodoByUser();
		const arrDone:Todo[] = [];
		if(dataOfUser.length) {
			// eslint-disable-next-line array-callback-return
			dataOfUser.map((item: Todo) => {
				if(item.completed) {
					arrDone.push(item);
				}
			});
		}
		return arrDone;
	};

	const doingList = getListDoneOfUser();

	return (
		<Box className="listDone listCustom">
			<List className={classes.root}>
				{
					doingList.length
						?
						doingList.map((done: Todo, index: number) => {
							return (
								<ListItem className={classes.istGroupItem} key={done.id}>
									<ListItemIcon>
										<IconButton edge="end" >
											<FavoriteBorderOutlined />
										</IconButton>
									</ListItemIcon>
									<ListItemText className={classes.DoneItem} primary={done.title} />
									<ListItemSecondaryAction>
										<IconButton edge="end" onClick={() => handleRemoveItem(done.id)}>
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
		userId: state.TodoReducer.userId,
	};
};

//action
const mapDispatchToProps = (dispatch: Function) => ({
	handleRemoveItem: (id: number) => dispatch(actionTypes.handleRemoveItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);
