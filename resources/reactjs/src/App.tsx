// prettier-ignore
import { AppBar, Badge, Divider, Drawer as DrawerMui, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from '@material-ui/icons/List';
import AndroidIcon from '@material-ui/icons/Android';
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Router } from "react-router-dom";
import { history } from "./configureStore";
import { Todo } from "./model";
import { HomePage, TodoPage } from "./pages";
import { RootState } from "./reducers/index";
import { withRoot } from "./withRoot";

/// Bach
import Bach from "./bach/pages/bach";
import Sen from "./sendoan/index";
import NgocApp from "./ngocvu/index";
import MyApp from "./mytruong_typescript/App";
import ReactTodo from "./khoa/pages/khoa";
import AppNhuPham from "./nhupham/App";

function Routes() {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Route exact={true} path="/" component={HomePage} />
			<Route exact={true} path="/home" component={HomePage} />
			<Route exact={true} path="/todo" component={TodoPage} />
			<Route exact={true} path="/bach" component={Bach} />
			<Route exact={true} path="/sen" component={Sen} />
			<Route exact={true} path="/ngoc" component={NgocApp} />
			<Route exact={true} path="/my" component={MyApp} />
			<Route exact={true} path="/khoa" component={ReactTodo} />
			<Route exact={true} path="/nhupham" component={AppNhuPham} />
		</div>
	);
}

function Drawer(props: { todoList: Todo[] }) {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.drawerHeader} />
			<Divider />
			<List>
				<ListItem button onClick={() => history.push("/")}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button onClick={() => history.push("/todo")}>
					<ListItemIcon>
						<TodoIcon todoList={props.todoList} />
					</ListItemIcon>
					<ListItemText primary="Todo" />
				</ListItem>
			</List>
			<List>
				<ListItem button onClick={() => history.push("/bach")}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="bach" />
				</ListItem>
			</List>
			<List>
				<ListItem button onClick={() => history.push("/sen")}>
					<ListItemIcon>
						<TodoIcon todoList={props.todoList} />
					</ListItemIcon>
					<ListItemText primary="sen" />
				</ListItem>
			</List>
			<List>
				<ListItem button onClick={() => history.push("/ngoc")}>
					<ListItemIcon>
						<TodoIcon todoList={props.todoList} />
					</ListItemIcon>
					<ListItemText primary="ngoc" />
				</ListItem>
			</List>
			<List>
				<ListItem button onClick={() => history.push("/my")}>
					<ListItemIcon>
						<TodoIcon todoList={props.todoList} />
					</ListItemIcon>
					<ListItemText primary="my" />
				</ListItem>
			</List>
			<List>
				<ListItem button onClick={() => history.push("/khoa")}>
					<ListItemIcon>
						<ListIcon />
					</ListItemIcon>
					<ListItemText primary="Khoa" />
				</ListItem>
			</List>
			<List>
				<ListItem button onClick={() => history.push("/nhupham")}>
					<ListItemIcon>
						<AndroidIcon />
					</ListItemIcon>
					<ListItemText primary="Nhu" />
				</ListItem>
			</List>
		</div>
	);
}

function App() {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(true);
	const todoList = useSelector((state: RootState) => state.todoList);
	const isMobile = false;
	// const isMobile = useMediaQuery((theme: Theme) =>
	// 	theme.breakpoints.down("sm")
	// );

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Router history={history}>
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerToggle}
								className={classes.navIconHide}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h6"
								color="inherit"
								noWrap={isMobile}
							>
								Create-React-App with Material-UI, Typescript,
								Redux and Routing
							</Typography>
						</Toolbar>
					</AppBar>
					<Hidden mdUp>
						<DrawerMui
							variant="temporary"
							anchor={"left"}
							open={mobileOpen}
							classes={{
								paper: classes.drawerPaper,
							}}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							<Drawer todoList={todoList} />
						</DrawerMui>
					</Hidden>
					<Hidden smDown>
						<DrawerMui
							variant="permanent"
							open
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<Drawer todoList={todoList} />
						</DrawerMui>
					</Hidden>
					<Routes />
				</div>
			</div>
		</Router>
	);
}

function TodoIcon(props: { todoList: Todo[] }) {
	let uncompletedTodos = props.todoList.filter(t => t.completed === false);

	if (uncompletedTodos.length > 0) {
		return (
			<Badge color="secondary" badgeContent={uncompletedTodos.length}>
				<FormatListNumberedIcon />
			</Badge>
		);
	} else {
		return <FormatListNumberedIcon />;
	}
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
	},
	navIconHide: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	drawerHeader: { ...theme.mixins.toolbar },
	drawerPaper: {
		width: 250,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
		overflow: "auto"
	},
}));

export default withRoot(App);
