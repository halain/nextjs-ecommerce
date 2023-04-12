import { ShopLayout } from '../../components/layouts';
import React from 'react';
import { initialData } from '@/database/products';
import { Box, Button, Grid, Typography } from '../../components/ui/material';
import { Chip } from '@mui/material';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';

const product = initialData.products[0];


const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>

      <Grid container spacing={ 3 } >

        <Grid item xs={ 12 } sm={ 7 }>
          <ProductSlideshow images={ product.images }  />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display={'flex'} flexDirection='column' >
            
            <Typography variant='h1' component={'h1'}>{ product.title }</Typography>
            <Typography variant='subtitle1' component={'h2'}>{ `$${product.price}` }</Typography>
            
            <Box sx={{ my: 2}}>
              <Typography variant='subtitle2' >Cantidad</Typography>
              <ItemCounter />
              <SizeSelector selectedSize={'XS'} sizes={ product.sizes } />
            </Box>
            
            {/* agregar al carrito */}
            <Button color='secondary' className='circular-btn'> 
              Agregar al carrito
            </Button>

            {/* <Chip label='No stock' color='error' variant='outlined'/> */}

            {/* description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Descripcion</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>
        
      </Grid>

    </ShopLayout>
  )
}

export default ProductPage