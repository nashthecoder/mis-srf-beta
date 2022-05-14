import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
// import { Image } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
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
                <List>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </List>
            </Drawer>
            <div className={classes.page}>
            { children }
            </div>
        </div>
    )
}
