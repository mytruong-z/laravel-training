import React, { FormEvent, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import * as TodoActions from "../store/TodoActions";
import { connect } from "react-redux";
import { StoreState, TodoState } from "../store/reducers/TodoReducers";
import {
	NativeSelect,
	FormControl,
	Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import root from "./styles";

const url = "http://jsonplaceholder.typicode.com/todos";

export interface AppState {
	fetchData: () => void,
	selectUserId: (value: number) => void,
	attr: TodoState
}

const styles = makeStyles({
	selectUser: {
		width: 100,
		color: root.mainColor,
	},
	formControl: {
		marginRight: 20,
		marginLeft: 20,
		"& .MuiInput-underline:before": {
			borderBottomColor: root.mainColor,
		},
		"& .MuiInput-formControl:hover:before": {
			borderBottomColor: root.mainColor,
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: root.mainColor,
		},
		"& .MuiNativeSelect-icon": {
			color: root.mainColor
		}
	},
	heading: {
		fontSize: 30,
		color: root.mainColor,
	},
	headingBox: {
		paddingTop: 30,
		paddingBottom: 40,
		backgroundColor: root.secondColor
	},
	app: {
		width: "70%",
		marginLeft: 300,
		marginTop: "5%",
		fontSize: 16
	}
});

const MainApp: React.FC<AppState> = (props) => {
	const classes = styles();
	const { attr, fetchData, selectUserId } = props;

	useEffect(() => {
		fetchData();

	}, [fetchData]);

	const onSelectHandler = (event: FormEvent) => {
		let target = event.target as HTMLInputElement;
		selectUserId(Number(target.value));
	};

	return (
		<Grid className={classes.app} container>
			<Grid container sm={12}>
				<Grid container alignItems="center" justify="center" direction="column" className={classes.headingBox}>
					<Grid container justify="center"
						  alignItems="flex-end" direction="row"
						  className={classes.heading}>User ID
						<FormControl className={classes.formControl}>
							<NativeSelect defaultValue={attr.userIds[0]}
										  className={classes.selectUser}
										  onClick={onSelectHandler}>
								{
									attr.userIds.map(userId => {
										return <option key={userId} value={userId}>{userId}</option>;
									})
								}
							</NativeSelect>
						</FormControl>
						- Todo list
					</Grid>
					<Form/>
				</Grid>
				<List/>
			</Grid>
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
		fetchData: () => dispatch(TodoActions.fetchData(url)),
		selectUserId: (value: number) => dispatch(TodoActions.selectUserId(Number(value))),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);