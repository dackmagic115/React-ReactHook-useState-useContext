import React , {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { MovieContext } from './MovieContext'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"



//// css for design///////////
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  

const Nav = () => {
    const classes = useStyles();

    const [movies , setmovies] = useContext(MovieContext)
    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Movie 
                    </Typography>
                    <p color="inherit">List of Movies: {movies.length}</p>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
