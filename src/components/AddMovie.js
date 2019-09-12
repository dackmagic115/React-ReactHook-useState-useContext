import React , {useState , useContext} from 'react'
import { MovieContext } from './MovieContext'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
  }));
  

const AddMovie = () => {
    const classes = useStyles();

    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
    const [movies , setMovies] = useContext(MovieContext)
    const updateName = e =>{
        setName(e.target.value)
    }
    
    const updatePrice = e =>{
        setPrice(e.target.value)
    }

    const addMovie = e =>{
        e.preventDefault()
        setMovies(preMovie =>[...preMovie, {name:name , price:price}])
    }

    return (
        <form onSubmit = {addMovie}> 
                  <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    name="name"
                    value={name}
                    onChange={updateName}
                    margin="normal"
                    variant="outlined"
                  />
                   <TextField
                    id="outlined-name"
                    label="price"
                    name="price"
                    className={classes.textField}
                    value = {price}
                    onChange = {updatePrice}
                    margin="normal"
                    variant="outlined"
                  />
             <div>
                <Button type="submit" variant="outlined" size="large" color="primary" className={classes.margin}>
                Submit
                </Button>
            </div>
        </form>
    )
}

export default AddMovie
