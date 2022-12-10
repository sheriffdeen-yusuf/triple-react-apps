import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  h4: {
    color: "white",
    marginRight: theme.spacing(4)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Link to='/'>
            <h4 className={classes.h4}>Home</h4>
          </Link>
          <Link to='/calculator'>
            <h4 className={classes.h4}>Calculator</h4>
          </Link>
          <Link to='/summary'>
            <h4 className={classes.h4}>Summary</h4>
          </Link>
          <Link to='/music'>
            <h4 className={classes.h4}>Music</h4>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;