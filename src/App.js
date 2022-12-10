import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Header from './componet/Header';
import Footer from './componet/Footer';
import Main from './componet/main/Main';
import Calculator from './componet/calculator/Calculator';



import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Route, Routes } from 'react-router-dom';
import Music from './componet/music/Music';
import Summary from './componet/summary/Summay';

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

export function ButtonAppBar() {
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



function App() {
  

  return (
    <div className="App">
        <h1>My Portfolio Project </h1>
        <Header/>
        <ButtonAppBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/music' element={<Music/>} />
        </Routes>
        <Footer/>
        

    </div>
  );
}

export default App;


