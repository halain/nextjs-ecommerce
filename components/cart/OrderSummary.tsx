import React from 'react';
import { Grid, Typography } from '../ui/material';

export const OrderSummary = () => {
  return (
    <Grid container>

      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3 items</Typography>
      </Grid>
      
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{ `$${ 155.35 }` }</Typography>
      </Grid>
      
      <Grid item xs={6}>
        <Typography>Impuestos (15%)</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{ `$${ 53.15 }` }</Typography>
      </Grid>
      
      <Grid item xs={6} sx={{ mt:2 }}>
        <Typography variant='subtitle1' >Total:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt:2 }}>
        <Typography variant='subtitle1'>{ `$${ 188.75 }` }</Typography>
      </Grid>

    </Grid>
  )
}
