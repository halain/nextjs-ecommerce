import React from 'react';
import NextLink from 'next/link';

import { ShopLayout } from '../../components/layouts';
import { Box, Link, Typography, RemoveShoppingCartOutlined } from '../../components/ui/material';

const EmptyPage = () => {
  return (
    <ShopLayout title='Carrito vacio' pageDescription='No hay artiulos en el carrito de compras' >
      <Box display='flex' justifyContent='center' alignItems='center' height='calc( 100vh - 200px)' flexDirection={{ xs: 'column', sm: 'row' }} >
        
        <RemoveShoppingCartOutlined sx={{ fontSize: 100}}/>
        <Box display='flex' flexDirection='column' alignItems='center' >
          <Typography>Su carrito esta vacio</Typography>
          <NextLink href='/' passHref prefetch legacyBehavior>
            <Link typography='h4' color='secondary'>
              Regresar
            </Link>
          </NextLink>
        </Box>

      </Box>
    </ShopLayout>
  )
}

export default EmptyPage;