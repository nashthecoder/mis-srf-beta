import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
// import { Image } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import SportsRugbyIcon from '@material-ui/icons/SportsRugby'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


const drawerWidth = 200


const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer : {
        width: drawerWidth
    },
    drawerPaper : {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    }

})

export default function Layout({ children }) {

    const classes = useStyles()

    const menuItems = [
        {
            text: 'Register',
            icon: <SportsRugbyIcon color="green" />,
            path: '/register'
        },
        {
            text: 'Sessions',
            icon: <LibraryAddCheckOutlinedIcon color="green" />,
            path: '/session'
        },
        {
            text: 'Visits',
            icon: <CottageOutlinedIcon color="green" />,
            path: '/visits'
        },
        {
            text: 'Counseling',
            icon: <VolunteerActivismOutlinedIcon color="green" />,
            path: '/counseling'
        },
        {
            text: 'Education',
            icon: <SchoolOutlinedIcon color="green" />,
            path: '/education'
        },
        {
            text: 'Lifeskills',
            icon: <SportsRugbyIcon color="green" />,
            path: '/lifeskills'
        },
        {
            text: 'Players',
            icon: <PeopleAltOutlinedIcon color="green" />,
            path: '/'
        },
        {
            text: 'Dashboard',
            icon: <SportsRugbyIcon color="green" />,
            path: '/dashboard'
        },
    ]
    return (
        <div className={classes.root}>
            {/* app bar */}
            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}}
            >
            <div>
                <Typography variant="h4">
                <SportsRugbyIcon 
                /> SRF MIS
                </Typography>
            </div>
            {/* list / links */}
            <List>
                {menuItems.map(item => (
                    <ListItem
                        key={item.text}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>


            </Drawer>
            <div className={classes.page}>
            { children }
            </div>
        </div>
    )
}
