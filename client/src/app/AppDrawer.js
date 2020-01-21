import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CheckIcon from '@material-ui/icons/Check';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const AppDrawer = ({ isOpen, toggleDrawer }) => {
    const classes = useStyles();

    return (
        <>
            <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                >
                    <List>
                        <ListItem button component={Link} to='/' key={'Home'}>
                            <ListItemIcon>
                                <HomeIcon/>
                                <ListItemText primary={'Home'} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem button component={Link} to='/guild-roster' key={'Guild Roster'}>
                            <ListItemIcon>
                                <AssignmentIndIcon/>
                                <ListItemText primary={'Guild Roster'} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem button component={Link} to='/event-calendar' key={'Event Calendar'}>
                            <ListItemIcon>
                                <DateRangeIcon/>
                                <ListItemText primary={'Event Calendar'} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem button component={Link} to='/raid-signup' key={'Raid Signup'}>
                            <ListItemIcon>
                                <CreateIcon/>
                                <ListItemText primary={'Raid Signup'} />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to='/attendence-tracking' key={'Attendence Tracking'}>
                            <ListItemIcon>
                                <CheckIcon/>
                                <ListItemText primary={'Attendence Tracking'} />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem button component={Link} to='/loot-drop-tracker' key={'Loot Drop Tracker'}>
                            <ListItemIcon>
                                <StarBorderIcon/>
                                <ListItemText primary={'Loot Drop Tracker'} />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    );
}

export default AppDrawer;