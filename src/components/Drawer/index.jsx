import React from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

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
					onClick={() => handleLinkURL('/fire/dashboard')}
				>
					<ListItemIcon><DashboardIcon /></ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => handleLinkURL('/fire/projects')}
				>
					<ListItemIcon><FolderIcon /></ListItemIcon>
					<ListItemText primary="Projetos" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => handleLinkURL('/fire/contracts')}
				>
					<ListItemIcon><AssignmentIcon /></ListItemIcon>
					<ListItemText primary="Contratos" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => handleLinkURL('/fire/users')}
				>
					<ListItemIcon><PeopleAltIcon /></ListItemIcon>
					<ListItemText primary="Usuarios" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => handleLinkURL('/fire/clients')}
				>
					<ListItemIcon><AssignmentIndIcon /></ListItemIcon>
					<ListItemText primary="Clientes" />
				</ListItem>
				<Divider />
			</List>
		</div>
	);
}