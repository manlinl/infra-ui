import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export function Navigation() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List className={classes.root}>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <OfflineBoltIcon />
                </ListItemIcon>
                <ListItemText primary="Bolt X" />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <BuildRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Deployment" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}

