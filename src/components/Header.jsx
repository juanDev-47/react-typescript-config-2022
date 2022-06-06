import { Grid } from '@mui/material';
import React from 'react';

const App = ({ nameValue }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <item>{nameValue}</item>
        </Grid>
      </Grid>
    </>
  );
};

export default App;

