import { Grid } from '@mui/material';
import React from 'react';
import Header from './components/Header.jsx';

function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Header nameValue="OCPP 1.6" />
      </Grid>
    </Grid>
  );
}

export default App;
