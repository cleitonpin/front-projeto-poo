import React from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import DashboardIcon from '@material-ui/icons/Dashboard';


const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

export default function MyDrawerList() {
	const classes = useStyles();
	const history = useHistory();

	const handleLinkURL = (url) => {
		history.push(url);
	};

	return (
		<div className={clsx(classes.list)}>
			<List>
				<ListItem
					button
					onClick={() => handleLinkURL('/dashboard')}
				>
					<ListItemIcon><DashboardIcon /> </ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem
					button
					onClick={() => handleLinkURL('/')}
				>
					<ListItemIcon><DashboardIcon /> </ListItemIcon>
					<ListItemText primary="Cotações de Frete" />
				</ListItem>
				<ListItem
					button
					onClick={() => handleLinkURL('/ambiente')}
				>
					<ListItemIcon><DashboardIcon /> </ListItemIcon>
					<ListItemText primary="Configurações" />
				</ListItem>
			</List>
		</div>
	);
}