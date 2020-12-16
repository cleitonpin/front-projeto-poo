import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// imports
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	MenuItem,
	Menu,
	Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MyDrawerList from '../../components/Drawer';
// import Swal from 'sweetalert2';
// import UserService from '../../services/UserService';
import './style.css';

// imgs

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		fontFamily: 'Prime',
	},
	appArea: {
		backgroundColor: 'rgba(0, 0, 0, .27)',
	},
}));

export default function MyAppBar({ me }) {
	const history = useHistory();
	const classes = useStyles();
	const [state, setState] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	// const logout = () => {
	// 	UserService.logout()
	// 		.then(() => {
	// 			history.push('/fire/users/login');
	// 		})
	// 		.catch(error => {
	// 			Swal.fire({
	// 				icon: 'error',
	// 				title: 'Oops...',
	// 				text: error.data.message,
	// 			});
	// 		});
	// };

	const toggleDrawer = (openDrawer) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return null;
		}
		setState(openDrawer);
	};

	const handleMyProfile = () => {
		history.push('/fire/my-profile');
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appArea}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						onClick={toggleDrawer(true)}
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Fire4Dev
						{' '}
						<span className="admin-color">Admin</span>
					</Typography>
					<div>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={handleClose}
						>
							<span className="row justify-content-center bold">
								Olá,
								{' '}
								{me && me.first_name}
							</span>
							<MenuItem onClick={handleMyProfile}>Minha conta</MenuItem>
							{/* <MenuItem onClick={logout}>Sair</MenuItem> */}
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="left"
				open={state}
				onClose={toggleDrawer(false)}
			>
				<MyDrawerList />
			</Drawer>
		</div>
	);
}