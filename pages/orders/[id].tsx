
import NextLink from 'next/link';

import { ShopLayout } from '@/components/layouts';
import { Box, Card, CardContent, Chip, CreditCardOffOutlined, CreditScoreOutlined, Divider, Grid, Link, Typography } from '../../components/ui/material';
import { CartList, OrderSummary } from '../../components/cart';




const OrderPage = () => {
  return (
    <ShopLayout title='Resumen orden 12412423525' pageDescription='Resumen de la orden' >
      <Typography variant='h1' component='h1' >Orden: ABC123</Typography>

      {/* <Chip 
        sx={{ my: 2}}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={ <CreditCardOffOutlined />}
      /> */}
      <Chip 
        sx={{ my: 2}}
        label='Orden pagada'
        variant='outlined'
        color='success'
        icon={ <CreditScoreOutlined />}
      />

      <Grid container>
        
        <Grid item xs={ 12 } sm={ 7 } >

          <CartList />

        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='sumary-card' >
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my:1 }} />

              <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Direccion de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
              
              <Typography>Hector Alvarez</Typography>
              <Typography>Calle direccion</Typography>
              <Typography>Municipio, zipcode</Typography>
              <Typography>Pais</Typography>
              <Typography>+1 2342525</Typography>

              <Divider sx={{ my:1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
              
              <OrderSummary />

              <Box sx={{ mt:3 }}>
                {/* TODO: */}
                <h1>
                  Pagar
                </h1>
                <Chip 
                  sx={{ my: 2}}
                  label='Orden pagada'
                  variant='outlined'
                  color='success'
                  icon={ <CreditScoreOutlined />}
                />
              </Box>

            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default OrderPage