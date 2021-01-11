import React from 'react';
import Home from './component/page/Home'
import {Switch } from 'react-router'
import {BrowserRouter as Router,Route,} from 'react-router-dom'
import About from './component/page/Hotels';
import Header from './component/template/Header'
import { colorProperties } from './CSSProperties/ColorProperties/colorProperties';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: colorProperties.myTravelColorGrayGreen,
      height: '100%',
    },
    body: {
      width: '90%',
      marginRight:'auto',
      marginLeft:'auto',
    },
    
  })
);
const App = React.memo(() => {
  const classes = useStyles();

  return(
    <div className={classes.container}>
      <div className={classes.body}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
          </Switch>
        </Router>
      </div>
   </div>
  )
})
export default App;
