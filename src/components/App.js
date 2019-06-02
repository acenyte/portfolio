import React from 'react';
import '../styles/App.css';

// Components //
import PortfolioCard from './PortfolioCard'
import Header from './Header'

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  
  return (
    <React.Fragment>

      {/* < CssBaseline /> */} 
      {/* <Header/> */}
      <PortfolioCard/>

    </React.Fragment>
    
  );

}

export default App;
