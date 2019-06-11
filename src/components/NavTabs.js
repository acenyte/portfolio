import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import PortfolioCard from './PortfolioCard'

import '../styles/nav.scss';

function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};



function NavTabs() {
  
  const [value, setValue] = React.useState(2);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function shrinkHeader() {

    if (!document.getElementById("header").classList.contains('small')) {
      let animationToClose = document.getElementsByClassName("animation-to-close");
      
      for (let i = 0; i < animationToClose.length ; i++) {
        animationToClose[i].beginElement();
      }
      document.getElementById("header").classList.add("small")
      document.getElementById("nav-bar").classList.add("small")
    }

  }

  return (
    
    <div id="nav-bar">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          
          <div onClick={ () => {handleChange(this,0); shrinkHeader()}} className="custom-tab">
            <span>Have a look at <br></br></span> my work
            <Tab/>
          </div>
         
          <div onClick={ () => {handleChange(this,1); shrinkHeader()}} className="custom-tab">
            <span>Find out more <br></br></span> about me
            <Tab />
          </div>

        </Tabs>
        
      </AppBar>
      {value === 0 && 
        <TabContainer>
          <PortfolioCard/>
        </TabContainer>}

      {value === 1 && 
        <TabContainer>
          I am what i am
        
        </TabContainer>}
        
    </div>
  );
}

export default NavTabs