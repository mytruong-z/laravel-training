// prettier-ignore
import { AppBar, Badge, Divider, Drawer as DrawerMui, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
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
import { RootState } from "./reducers";
import { withRoot } from "./withRoot";

/// Bach
import Bach from "./bach/pages/bach";
import Sen from "./sendoan/index";
import NgocApp from "./ngocvu/index";
import MyApp from "./mytruong_typescript/App";
import ReactTodo from "./khoa/pages/khoa";
import AppNhuPham from "./nhupham/App";
import {CSRoute} from "./model/csroute";

function Routes(props: { routes: CSRoute[] }) {
	const classes = useStyles();

	return (
		<div className={classes.content}>
            {props.routes.map((route, index) => <Route key={index} exact={true} path={route.path} component={route.component} />)}
		</div>
	);
}

function Drawer(props: { routes: CSRoute[], todoList: Todo[] }) {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.drawerHeader} />
            <Divider />

            {props.routes.map((route, index) => {
                return (
                    <React.Fragment key={index}>
                        <List>
                            <ListItem button onClick={() => history.push(route.path)}>
                                <ListItemIcon>
                                    {route.icon}
                                </ListItemIcon>
                                <ListItemText primary={route.name} />
                            </ListItem>
                        </List>
                        {route.divider && <Divider />}
                    </React.Fragment>
                );
            })}
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

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const routes: CSRoute[] = [
        {path: '/', name: 'Home', icon: <HomeIcon />, component: HomePage, divider: true},
        {path: '/todo', name: 'Todo', icon: <TodoIcon todoList={todoList} />, component: TodoPage},
        {path: '/bach', name: 'Bach', icon: <HomeIcon />, component: Bach},
        {path: '/sen', name: 'Sen', icon: <TodoIcon todoList={todoList} />, component: Sen},
        {path: '/ngoc', name: 'Ngoc', icon: <TodoIcon todoList={todoList} />, component: NgocApp},
        {path: '/my', name: 'My', icon: <TodoIcon todoList={todoList} />, component: MyApp},
        {path: '/khoa', name: 'Khoa', icon: <ListIcon />, component: ReactTodo},
        {path: '/nhupham', name: 'Nhu', icon: <AndroidIcon />, component: AppNhuPham},
    ];

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
							<Drawer routes={routes} todoList={todoList} />
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
							<Drawer routes={routes} todoList={todoList} />
						</DrawerMui>
					</Hidden>
					<Routes routes={routes} />
				</div>
			</div>
		</Router>
	);
}

function TodoIcon(props: { todoList: Todo[] }) {
	let uncompletedTodos = props.todoList.filter(t => !t.completed);

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
