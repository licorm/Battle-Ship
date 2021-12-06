import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={2}>
        <Item>Item1</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>Item2</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>Item3</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>Item4</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>Item5</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function BattleGrid(props) {
  return (
<Grid container spacing={1}>
  <Grid container item spacing={1}>
    <FormRow />
  </Grid>
  <Grid container item spacing={1}>
    <FormRow />
  </Grid>
  <Grid container item spacing={1}>
    <FormRow />
  </Grid>
  <Grid container item spacing={1}>
    <FormRow />
  </Grid>
  <Grid container item spacing={1}>
    <FormRow />
  </Grid>
</Grid>

  )
}