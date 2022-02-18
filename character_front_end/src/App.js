import './App.css';
import React, { useState, useEffect } from 'react';
import CharacterList from './views/CharacterList';
import DetailsPage from './views/DetailsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Grid,Container,Box,TextField ,AppBar,Toolbar,Typography,Card,CardContent,CardMedia,BottomNavigation,Chip, Button,CircularProgress,CardActions,Badge} from '@mui/material';

function App() {
  return (
    <div className="App">
      <React.Fragment>
            <AppBar position="static">
                <Toolbar variant="dense">
                    
                    <Typography variant="h6" color="inherit" component="div">
                    Characters
                    </Typography>
                </Toolbar>
            </AppBar>

      <Router>
        <Switch>
            <Route exact path="/" component={CharacterList}/>
            <Route path="/details/:id" component={DetailsPage}/>
        </Switch>
      </Router>
      </React.Fragment>
     
    </div>
  );
}

export default App;
