import { ShopLayout } from '@/components/layouts';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@/components/ui/material';



import React from 'react';


const AddressPage = () => {
  return (
    <ShopLayout title='Direccion' pageDescription='Confirmar direccion de destino'>
      <Typography variant='h1' component='h1'>Direccion</Typography>

      <Grid container spacing={ 2 } sx={{ mt: 2 }}>

        <Grid item xs={12} sm={6}>
          <TextField label='Nombre' variant='filled' fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Apellido' variant='filled' fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField label='Direccion' variant='filled' fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Direccion2 (opcional)' variant='filled' fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField label='Codigo Postal' variant='filled' fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Ciudad' variant='filled' fullWidth/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant='filled' label='Pais' value={3}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Hondura</MenuItem>
              <MenuItem value={3}>El Salvador</MenuItem>
              <MenuItem value={4}>Mexico</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Telefono' variant='filled' fullWidth/>
        </Grid>

      </Grid>

      <Box sx={{ mt: 5, }} display='flex' justifyContent='center'>
        <Button color='secondary' className='circular-btn' size='large'>
          Revisar pedido
        </Button>
      </Box>

    </ShopLayout>
  )
}

export default AddressPage