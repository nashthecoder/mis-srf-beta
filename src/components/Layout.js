import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { useHistory, useLocation } from 'react-router-dom'

//MATERIAL UI
import { Avatar, makeStyles } from '@material-ui/core'

import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

// ICONS
import SportsRugbyIcon from '@material-ui/icons/SportsRugby'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


const useStyles = makeStyles((theme) => {
    return {
        btn: {
            color: '#018934'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

const drawerWidth = 190;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}),
);

// const Search {
    
// };

export default function Layout({children}) {
    const classes = useStyles()
    const theme = useTheme();
    const history = useHistory()
    const location = useLocation() 

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuItems = [
                {
            text: 'Dashboard',
            icon: <DashboardOutlinedIcon style={{ color: "green" }} />,
            path: '/dashboard'
        },
        {
            text: 'Register',
            icon: <HowToRegOutlinedIcon style={{ color: "green" }} />,
            path: '/register'
        },
        {
            text: 'Sessions',
            icon: <LibraryAddCheckOutlinedIcon style={{ color: "green" }} />,
            path: '/sessions'
        },
        {
            text: 'Visits',
            icon: <CottageOutlinedIcon   style={{ color: "green" }} />,
            path: '/visits'
        },
        {
            text: 'Counseling',
            icon: <VolunteerActivismOutlinedIcon style={{ color: "green" }} />,
            path: '/counseling'
        },
        {
            text: 'Education',
            icon: <SchoolOutlinedIcon style={{ color: "green" }} />,
            path: '/education'
        },
        {
            text: 'Life Skills',
            icon: <SportsRugbyIcon style={{ color: "green" }} />,
            path: '/lifeskills'
        },
        {
            text: 'Players',
            icon: <PeopleAltOutlinedIcon style={{ color: "green" }} />,
            path: '/players'
        },
    ]
    const menuItems1 = [
        {
            text: 'Settings',
            icon: <SettingsIcon style={{ color: "green" }} />,
            path: '/settings'
        },
        {
            text: 'Admin',
            icon: <LockOutlinedIcon style={{ color: "green" }} />,
            path: '/admin'
        },
    ]

return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography 
                className={classes.title}
                variant="h6" 
                noWrap 
                component="div">
                MIS
            </Typography>
            <Typography 
                variant="h6" noWrap component="div">
                User
            </Typography>
            <Avatar 
                className={classes.avatar}
                image={require('../assets/man.png')}      
            />
        </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
            <CardMedia 
            component="img"
            sx={{ width: 140 }}
            sm={{ width: 140 }}
            md={{ width: 150 }}
            lg={{ width: 160 }}
            image={require('../assets/logo.png')}
            />
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {menuItems.map(item => (
                <ListItem className={classes.btn} key={item.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        onClick={() => history.push(item.path)}
                        className={location.pathname === item.path ? classes.active : null}
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                            >{item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.text} 
                            sx={{ opacity: open ? 1 : 0 }}
                            />
                    </ ListItemButton>
                </ListItem>
                ))}
            </List>
        <Divider />
        <List>
            {menuItems1.map((item) => (
                <ListItem className={classes.btn} key={item.text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    onClick={() => history.push(item.path)}
                    className={location.pathname === item.path ? classes.active : null}
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                    primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <div>
            { children }
            </div>
        </Box>
    </Box>
);
}