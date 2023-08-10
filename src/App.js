import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import './App.css';

function App() {

  // styles
  const oneButtonSettings = {
    height: '47px',
    color: 'white',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#282828',
    backgroundColor: 'rgba(25, 118, 210, 0.04)',
    borderRadius: '0px',
  };

  const secondButtonSettings = {
    height: '47px',
    width: '30%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#404040',
    borderRadius: '0px',
  };

  const colorSectionHomePageHeader = {
    color: 'rgb(9, 145, 224)',
  };

  // variable definitions
  const [ buttonSelected, setButtonSelected ] = useState('You');

  // function definitons
  const changeHomePageButtonSelection = (buttonSelection) => {
    setButtonSelected(buttonSelection);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          GivTech
        </h1>
        <Box>
          <Typography variant="h3">
            Giving To
          </Typography>
          <Typography variant="h3" sx={colorSectionHomePageHeader}>
            {(buttonSelected === 'You') && `You`} {(buttonSelected === 'Humanity') && `Others`}
          </Typography>
        </Box>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Button variant="contained">
          Learn More
        </Button> */}
        {/* <p>
          The easiest way to give and receive
        </p> */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '35%',
          margin: '0px auto',
          justifyContent: 'center',
        }}>
          <Button
            sx={(buttonSelected === 'You') ? secondButtonSettings : oneButtonSettings}
            onClick={() => {
              changeHomePageButtonSelection('You');
            }}
          >
            You
          </Button>
          {/* <Button
            sx={(buttonSelected === 'Your Well Being') ? secondButtonSettings : oneButtonSettings}
            onClick={() => {
              changeHomePageButtonSelection('Your Well Being');
            }}
          >
            Well Being
          </Button> */}
          <Button
            sx={(buttonSelected === 'Humanity') ? secondButtonSettings : oneButtonSettings}
            onClick={() => {
              changeHomePageButtonSelection('Humanity');
            }}
          >
            Others
          </Button>
        </Box>
      </header>
      <Box>
        {
          /*
          // The Next Thing To Do Is To
          // Build Out A Display That Dynamically Changes Based On The Home Page Button That Is Selected
          // If The Button That The User Is Currently On Is The 'Your Self' Button
          // Display All The Ways A User Can Help Their Selves Using Our Platform, Such As,
          // Our Platform Is For You To Use, For FREE, If You Want To Improve Your 
          // 'Health and Wellness', 'Finances', 'Career'
          // Where Each Thing Listed Is A Clickable Button/Card Within A Carousel Component
          */
        }
      </Box>
    </div>
  );
}

export default App;
