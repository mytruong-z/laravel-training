import React, { useEffect } from "react";
import {connect} from 'react-redux';
import * as actionTypes from '../store/action';
import Form from "./Form";
import DoingList from './DoingList';
import DoneList from './DoneList';
import { TodoType, TodoReducer } from "../typings/Todo";
import { Button, Grid, Box, Typography } from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";

interface typeForMapTodo {
	TodoReducer: TodoReducer
}

const useStyles = makeStyles({
	typographyStyle: {
		color: "black",
		fontWeight: "bold"
	},
	marginTop20: {
		marginTop: "20px"
	},
	buttonUser: {
		marginBottom: "10px",
		width: "95%"
	},
	boxAdd: {
		backgroundColor: "#dc3545",
		padding: "30px 40px",
		color: "#ffffff",
		textAlign: "center",
		marginTop: "20px"
	},
	boxMiddle: {
		margin: "25px auto",
		width: "50%",
		textAlign: "center"
	},
});

const TodoList: React.FC<TodoType> = (props) => {
	const {userId, userList, loaded, setUserId, fetchToDo, fetchUser} = props;
	const classes = useStyles();

	useEffect(() => {
        fetchUser();
	}, []);

	const handleChangeUserId = (id: number) => {
        setUserId(id);
        fetchToDo(id);
	};

    const getUserName = () => {
        let name = 'User';
        userList.map((item: any, index: number) => {
            if (item.id === userId) {
                name = item.name;
            }
        });
        return name;
    };

	return (
		<React.Fragment>
			<Box>
				{loaded ?
					<Box className={classes.boxMiddle}>
						{
							(userId > 0)
								?
								<Box>
									<Typography className={classes.typographyStyle} variant="h5" component="h1">
										To Do List - {getUserName()}
									</Typography>
									<Box className="container">
										<Box className={classes.boxAdd}>
											<Form />
										</Box>
										<Box className="listAll">
											<DoingList />
											<DoneList />
										</Box>
									</Box>
									<Button
										variant="contained"
										color="primary"
										onClick={() => setUserId(-1)}
										className="btnBack btn btn-danger btn-lg btn-block">
										Back List
									</Button>
								</Box>
								:
								<Box>
									<Typography className={classes.typographyStyle} variant="h5" component="h1">
										Choose the user
									</Typography>
									<Grid
										container
										direction="row"
										justify="flex-start"
										alignItems="baseline"
										className={classes.marginTop20}
									>
										{
											userList.map((data: any, index: number) => {
												return (
													<Grid key={index} container item sm={3}>
														<Button
															className={classes.buttonUser}
															variant="contained"
															color="secondary"
															key={data.id}
															onClick={() => handleChangeUserId(data.id)}>
															{data.name}
														</Button>
													</Grid>
												);
											})
										}
									</Grid>
								</Box>
						}
					</Box>
					: null
				}
			</Box>
		</React.Fragment>
	)
};

const mapStateToProps = (state: typeForMapTodo) => {
	return {
		loaded: state.TodoReducer.loaded,
		userId: state.TodoReducer.userId,
		userList: state.TodoReducer.userList,
		allList: state.TodoReducer.allList,
	};
};

//action
const mapDispatchToProps = (dispatch : Function) => ({
	fetchToDo: (data: number) =>  dispatch(actionTypes.fetchTodo(data)),
	setUserId: (data: number) => dispatch(actionTypes.setUserId(data)),
	fetchUser: () =>  dispatch(actionTypes.fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);