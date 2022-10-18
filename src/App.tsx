import React from 'react';
import './App.css';
import {Grid} from '@mui/material'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-menu">
        <div><img src='images/kelly-logo-right.png' alt='logo'></img></div>
        </div>
        <Grid container spacing={2} paddingLeft='40px' paddingRight='40px' paddingTop={'40px'}>
          <Grid item xs={6} md={4}>
            <img width='100%' src='images/kelly-headshot-gray.jpg' alt='headshot'></img>
          </Grid>
          <Grid item xs={6} md={8} lg={4}>
            <div style={{textAlign: 'left'}}>
              <p>
                Kelly Sundberg has been providing clients in Williamson and surrounding counties with trusted
                legal services for over 20 years. She works in areas of guardianship, probate, 
                wills, trusts and estates, and family law.
              </p>
              <p>
                Call today to make an appointment - <a style={{color: 'white'}} href="tel:512-246-3995">512-246-3995</a>.
                The offices of Kelly Sundberg, PC are located in downtown Round Rock. Virtual and in-person meetings are
                available.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className='footer' paddingLeft='140px' paddingRight='140px'>
          <Grid item xs={12} md={4}>
            407 W Liberty Ave Round Rock, TX 78664
          </Grid>
          <Grid item xs={12} md={4}>
            <a style={{color: 'white'}} href="tel:512-246-3995">512-246-3995</a>
          </Grid>
          <Grid item xs={12} md={4}>
            <a style={{color: 'white'}} href="mailto:kelly@kellysundberglaw.com">kelly@kellysundberglaw.com</a>
          </Grid>
        </Grid>

      </header>
    </div>
  );
}

export default App;
