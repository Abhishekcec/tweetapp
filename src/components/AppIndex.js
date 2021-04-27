import React from "react";
// import { withRouter } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Login from "./Login";
import Registration from "./Registration";
import Feed from "./Feed";
// import MenuIcon from '@material-ui/icons/Menu';

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
}));


const AppIndex = () => {

    const classes = useStyles();
    
    return (
        <div>
            <Router>
            <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TweetApp
          </Typography><Button style={{background: "white"}} color = "white" ><Link to = "/registration" >Tweets</Link></Button>
          &nbsp;&nbsp; <Button style={{background: "white"}} color = "white" ><Link to = "/registration" >All Users</Link></Button>
         &nbsp;&nbsp; <Button style={{background: "white"}} color = "white" ><Link to = "/registration" >Register</Link></Button>
         &nbsp;&nbsp; <Button style={{background: "white"}} color="white"><Link to = "/login" >Login</Link></Button>
         &nbsp;&nbsp; <Button style={{background: "white"}} color = "white" ><Link to = "/registration" >Logout</Link></Button>

        </Toolbar>
      </AppBar>
      {/* <Router history={history}> */}
        <Switch>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/registration">
            <Registration />
          </Route>
          <Route path = "/tweets">
            <Feed />
          </Route>
        </Switch>
        </div>
      {/* </Router> */}
      </Router>
    {/* </div> */}
            {/* <h1>Welcome to Tweet Application</h1> */}
        </div>
    )
}

export default AppIndex;